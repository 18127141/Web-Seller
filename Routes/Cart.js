var express = require('express')
var router = express.Router()
var user_controller = require('../controllers/user')
var size_controller = require('../controllers/size')
var product_controller = require('../controllers/product')
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
        var size = 0
        var stock = 0
        var quantity = 1
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
router.get('/DeleteProduct', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    var id = req.query.id
    var submit = req.query.submit
    var returnPath = req.query.returnPath
    for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].id == id) {
            req.session.cart.splice(i, 1)
            break
        }
    }
    if (submit == "mark") {
        res.redirect(`/Mark/UpdateMark?id=${id}&returnPath=${returnPath}`)
    }
    res.redirect(returnPath)
})

//Payment
router.get('/Payment', function (req, res) {
    if (req.session.user == undefined){
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
        if (req.session.user_pay == undefined){
            req.session.user_pay = {
                name:req.session.user.name,
                phone:req.session.user.phone,
                address:req.session.user.address,
                discount: "",
            }
        }
        if (req.query.CVoucher != undefined && req.query.CVoucher != "") {
            req.session.user_pay.discount = req.query.CVoucher
        }
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

router.get('/Bill', function (req, res) {
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

        res.render('Bill',
            {
                cart: cart,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})
module.exports = router