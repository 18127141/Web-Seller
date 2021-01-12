var express = require('express')
var router = express.Router()
var comment_controller = require('../controllers/comment')
router.get('/:id', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
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
        //
        var total_star = 0
        var star_5 = 0
        var star_4 = 0
        var star_3 = 0
        var star_2 = 0
        var star_1 = 0
        var comment = await comment_controller.getByProductId(select_id)
        for (let i = 0; i < comment.length; i++) {
            total_star += comment[i].star
            if (comment[i].star == 5) {
                star_5 += 1
            }
            else if (comment[i].star == 4) {
                star_4 += 1
            }
            else if (comment[i].star == 3) {
                star_3 += 1
            }
            else if (comment[i].star == 2) {
                star_2 += 1
            }
            else {
                star_1 += 1
            }
        }
        var temp = []
        var count = 0
        if (products.length > 12) {
            if (parseInt(products.length / 2) > 12) {
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
        product = product[0]
        var size = await size_controller.getById(select_id)
        var sizes = await size_controller.getAll()
        var img = await img_controller.getById(select_id)
        
        var star = 0
        if (comment.length == 0) {
            star = 0
        }
        else {
            var star = (Math.round(parseFloat(total_star / (comment.length)) * 100) / 100).toFixed(2)
        }
        var check = false
        if (product.type == "1"){
            check = true
            
        }
        
        res.render('Show_product',
            {
                products: products,
                star_5: star_5,
                star_4: star_4,
                star_3: star_3,
                star_2: star_2,
                star_1: star_1,

                star: star,
                total_comment: comment.length,
                product: product,
                comment: comment,
                size_stock: size,
                size_stocks: sizes,
                img_src: img,
                check:check,
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                congrats: congrats,
                cart_total: req.session.cart.length
            })

    }
})

module.exports = router