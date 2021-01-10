var express = require('express')
var router = express.Router()
var order_controller = require('../controllers/order')
var order_detail_controller = require('../controllers/order_detail')
var product_controller = require('../controllers/product')
router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    res.render('Check_order', { usercheck: req.session.user, cart_total: req.session.cart.length })
})
//
router.get('/verifyorder', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }

    var order_id_1 = req.query.order_id
    order_id_1 = order_id_1.split('')
    if (order_id_1[0] == 'O' && order_id_1[1] == 'R') {
        order_id_1 = req.query.order_id
    }
    else {
        order_id_1 = "OR" + req.query.order_id
    }
    getdata()
    async function getdata() {
        var order = await order_controller.getByInfoAndId(order_id_1, req.query.info)
        if (order[0] != undefined) {
            res.redirect(`/Check-order/${order[0].id}`)
        }
        else {
            res.redirect("/Check-order")
        }
    }
})
router.get('/:id', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {
        var check = []
        var order = await order_controller.getById(req.params.id)
        if (req.session.user != undefined) {
            check = await order_controller.getByIdUserId(req.params.id, req.session.user.id)
        }
        if (check[0] != undefined) {
            check = true
        }
        else {
            check = false
        }
        
        var products = await order_detail_controller.getByOrderId(req.params.id)
        var product = []

        for (let i = 0; i < products.length; i++) {
            var temp = await product_controller.getById(products[i].ProductId)
            product.push({
                
                id: temp[0].id,
                name: temp[0].name,
                size: products[i].size,
                quantity: products[i].quantity,
            })
        }

        res.render('Bill',
            {
                order: order[0],
                belong: check,
                product: product,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})


module.exports = router