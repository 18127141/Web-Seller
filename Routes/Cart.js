var express = require('express')
var router = express.Router()
var user_controller = require('../controllers/user')
var size_controller = require('../controllers/size')
var product_controller = require('../controllers/product')
var voucher_controller = require('../controllers/voucher')
var voucher_detail_controller = require('../controllers/voucher_detail')
var order_controller = require('../controllers/order')
var order_detail_controller = require('../controllers/order_detail')
var models = require('../models')
router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {
        var cart = []

        for (let i = 0; i < req.session.cart.length; i++) {
            var product = await product_controller.getById(req.session.cart[i].id)
            var size = await size_controller.getStock(req.session.cart[i].id, req.session.cart[i].size)
            cart.push({
                id: product[0].id,
                name: product[0].name,
                brand: product[0].brand,
                price: product[0].price,
                main_img: product[0].main_img,
                size: size[0].size,
                stock: size[0].stock,
                quantity: req.session.cart[i].quantity,
                info: product[0].info,
            })

        }
        var discount;
        if (req.session.user_pay != undefined) {
            discount = req.session.user_pay.discount
        }
        res.render('Cart',
            {
                cart: cart,
                discount: discount,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})
router.get("/ChangeCart", function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    var user_pay = {
        name: req.query.name,
        phone: req.query.phone,
        address: req.query.address,
        discount: "#" + req.query.discount,
    }

    req.session.user_pay = user_pay
    res.redirect("/Cart")
})
router.get("/UpdateCart", function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }

    getdata();
    async function getdata() {
        //default size and quantity

        var size_stock = await size_controller.getById(req.query.id)
        var product = await product_controller.getById(req.query.id)
        var size = 0
        var stock = 0
        var quantity = 1
        var price = product[0].price
        for (let i = 0; i < size_stock.length; i++) {
            if (parseInt(size_stock[i].stock) != 0) {
                size = size_stock[i].size
                stock = size_stock[i].stock
                break
            }
        }
        //set size and quantity if exist
        if (req.query.size != undefined && req.query.quantity != undefined) {
            size = req.query.size
            quantity = parseInt(req.query.quantity)
        }

        // check if the product is already in the cart
        var check = false
        for (let i = 0; i < req.session.cart.length; i++) {
            if (req.session.cart[i].id == req.query.id && req.session.cart[i].size == size) {
                check = true
                if (quantity + req.session.cart[i].quantity >= stock) {
                    req.session.cart[i].quantity = stock
                }
                else {
                    req.session.cart[i].quantity += quantity
                }
            }
        }
        if (check == false) {
            req.session.cart.push({
                id: req.query.id,
                size: size,
                price: price,
                quantity: quantity
            })
        }

        if (req.query.submit == "Pay") {
            res.redirect("/Cart")
        }
        else {
            req.session.congrats = "Thêm sản phẩm vào giỏ hàng thành công!"

            res.redirect(req.query.returnPath)

        }
    }
})
router.get('/UpdateQuantity', function (req, res) {
    for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].id == req.query.id && req.session.cart[i].size == req.query.size) {
            req.session.cart[i].quantity = req.query.quantity
            break
        }
    }
    res.json(req.session.cart)
})
router.get('/DeleteProduct', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    var id = req.query.id
    var size = req.query.size
    var submit = req.query.submit
    var returnPath = req.query.returnPath
    for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].id == id && req.session.cart[i].size == size) {
            req.session.cart.splice(i, 1)
            break
        }
    }
    
    if (submit == "mark") {

        res.redirect(`/Mark/UpdateMark?id=${id}&returnPath=${returnPath}`)
    }
    else {
        res.redirect(returnPath)
    }
})

//Payment
router.get('/Payment', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {
        var cart = []

        for (let i = 0; i < req.session.cart.length; i++) {
            var product = await product_controller.getById(req.session.cart[i].id)
            var size = await size_controller.getStock(req.session.cart[i].id, req.session.cart[i].size)
            cart.push({
                id: product[0].id,
                name: product[0].name,
                brand: product[0].brand,
                price: product[0].price,
                main_img: product[0].main_img,
                size: size[0].size,
                stock: size[0].stock,
                quantity: req.session.cart[i].quantity,
                info: product[0].info,
            })

        }
        if (req.session.user_pay == undefined) {
            req.session.user_pay = {
                name: req.session.user.name,
                phone: req.session.user.phone,
                address: req.session.user.address,
                discount: "",
                total: 0,
            }
        }
        if (req.query.CVoucher != undefined && req.query.CVoucher != "") {
            req.session.user_pay.discount = req.query.CVoucher
        }
        else {
            req.session.user_pay.discount = ""
        }
        let total_price = 0
        for (let i = 0; i < req.session.cart.length; i++) {

            total_price += req.session.cart[i].price * req.session.cart[i].quantity
        }
        req.session.user_pay.total = total_price
        res.render('Payment',
            {
                cart: cart,
                user_pay: req.session.user_pay,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})
router.get("/GetVoucher", function (req, res) {
    getdata();

    async function getdata() {
        var user_voucher = await voucher_detail_controller.checkValidVoucher("#" + req.query.voucher, req.session.user.id)


        var voucher = []
        if (user_voucher[0] != undefined) {
            var voucher_info = await voucher_controller.getById(user_voucher[0].voucherId)
            if (voucher_info[0] != undefined) {
                var today = new Date();
                var status
                var startDay = new Date(voucher_info[0].startDay);
                var expireDay = new Date(voucher_info[0].expireDay)
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                today = new Date(date)

                if ((today.getTime() - startDay.getTime()) >= 0 && (today.getTime() - expireDay.getTime()) <= 0) {
                    status = true
                }
                else {
                    status = false
                }

                voucher.push(
                    {
                        id: "#" + voucher_info[0].id,
                        startDay: voucher_info[0].startDay,
                        expireDay: voucher_info[0].expireDay,
                        value: voucher_info[0].value,
                        number: user_voucher[0].number,
                        status: status
                    }
                )

            }

        }
        res.json(voucher)
    }

})
router.get('/GenerateOrder', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata()
    async function getdata() {
        var generating
        do {
            generating = Math.floor(Math.random() * Math.floor(1000000000))
            generating = generating.toString();
            while (generating.length < 9) {
                generating = '0' + generating
            }
            generating = 'OR' + generating

            var order = await order_controller.getById(generating)

        } while (order[0] != undefined)

        //update_voucher ---------------------------------------------
        var voucher_detail = await voucher_detail_controller.checkValidVoucher('#' + req.query.voucher, req.session.user.id)
        var discountPrice = 0
        if (voucher_detail[0] != undefined) {
            var voucher = await voucher_controller.getById('#' + req.query.voucher)
            discountPrice = voucher[0].value

            if (voucher_detail[0].number == 1) {
                models.voucher_detail.destroy({
                    where: { voucherId: '#' + req.query.voucher, UserId: req.session.user.id }
                })

            }
            else {
                var temp = voucher_detail[0].number - 1
                models.voucher_detail.update({
                    number: temp,
                }, {
                    where: { voucherId: '#' + req.query.voucher, UserId: req.session.user.id }
                })
            }
        }
        // initiate infomation

        let total_price = 0
        let totalProduct = 0
        for (let i = 0; i < req.session.cart.length; i++) {
            totalProduct += req.session.cart[i].quantity
            total_price += req.session.cart[i].price * req.session.cart[i].quantity

        }
        //create order-------------------------------
        models.order.create({
            id: generating,
            totalPrice: total_price,
            discountPrice: discountPrice,
            delivery: req.query.delivery,
            pay: req.query.Pay,
            status: 'Check',
            totalProduct: totalProduct,
            name: req.query.name,
            email: req.session.user.email,
            phone: req.query.phone,
            address: req.query.address,
            UserId: req.session.user.id,
        })
        for (let i = 0; i < req.session.cart.length; i++) {
            var size = await size_controller.getStock(req.session.cart[i].id, req.session.cart[i].size,)
            var size_temp = size[0].stock - req.session.cart[i].quantity
            models.size_stock.update({
                stock: size_temp
            }, {
                where: { ProductId: req.session.cart[i].id, size: req.session.cart[i].size }
            })
            models.order_detail.create({
                orderId: generating,
                quantity: req.session.cart[i].quantity,
                size: req.session.cart[i].size,
                ProductId: req.session.cart[i].id,
            })
        }
        req.session.cart = []
        res.redirect(`/Check-order/${generating}`)
    }
})

module.exports = router