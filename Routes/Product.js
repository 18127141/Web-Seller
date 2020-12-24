var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    let size_controller = require('../controllers/size')
    let product_controller = require('../controllers/product')
    var congrats = req.session.congrats
    req.session.congrats = undefined
    getdata();
    async function getdata() {
        var products = await product_controller.getAll()

        var size = await size_controller.getAll()
        res.render('Product',
            {
                products: products,
                size_stock: size,
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                congrats:congrats
            })

    }
})

module.exports = router