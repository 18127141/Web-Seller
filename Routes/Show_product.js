var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
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
        var products = await product_controller.getExceptId(select_id)
        var temp = []
        var count = 0
        if (products.length > 12) {
            if (parseInt(products.length / 2) >12) {
                while (count != 12) {
                    var random_index = Math.floor(Math.random() * products.length)
                   
                    if (temp.find(ele => ele.id == products[random_index].id) == undefined) {
                        temp.push(products[random_index])
                        count++
                    }
                }
                products = temp
            }
            else {
                
                while (products.length != 12) {
                    var random_index = Math.floor(Math.random() * products.length)
                    products.splice(random_index, 1)
                }
            }
        }
        console.log(products.length)
        product = product[0]
        var size = await size_controller.getById(select_id)
        var sizes = await size_controller.getAll()
        var img = await img_controller.getById(select_id)
        res.render('Show_product',
            {
                products: products,
                product: product,
                size_stock: size,
                size_stocks: sizes,
                img_src: img,
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                congrats: congrats,
                cart_total: req.session.cart.length
            })

    }
})

module.exports = router