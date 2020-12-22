var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
    var select_id = req.params.id
    var congrats = req.session.congrats
    req.session.congrats = undefined
    let product_controller = require('../controllers/product')
    let size_controller = require('../controllers/size')
    let img_controller = require('../controllers/img_src')
    getdata();
    async function getdata() {
        //var product = await product_controller.getById(select_id)
        var product = await product_controller.getById(select_id)
        product = product[0]
        var size = await size_controller.getById(select_id)

        var img = await img_controller.getById(select_id)
        res.render('Show_product',
            {
                product: product,
                size_stock: size,
                img_src: img,
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                congrats: congrats,
                cart_total: req.session.cart.length
            })

    }
})

module.exports = router