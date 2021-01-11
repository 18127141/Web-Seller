var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')
var bcrypt = require('bcrypt')
var voucher_controller = require('../controllers/voucher')
var voucher_detail_controller = require('../controllers/voucher_detail')
var order_controller = require('../controllers/order')
var order_detail_controller = require('../controllers/order_detail')
var size_controller = require('../controllers/size')
var product_controller = require('../controllers/product')
var models = require('../models')
var checked
//Login
router.get('/Login', function (req, res) {
    req.session.returnURL = req.query.returnURL
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    res.render('Login', { cart_total: req.session.cart.length })
})

//Register
router.get('/Register', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    res.render('Register', { cart_total: req.session.cart.length })
})

//Check login---------------------------
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    var username = req.body.User
    var password = req.body.P_WORD

    getdata();
    async function getdata() {
        checked = await user_controller.checkUserName(username)

        if (checked[0] == undefined) {
            res.render('Login', { cart_total: req.session.cart.length, error_mess: 'Unvalid username or password' })

        } else {

            bcrypt.compare(password, checked[0].password, function (err, check_pass) {

                if (check_pass == false) {
                    res.render('Login', { cart_total: req.session.cart.length, error_mess: 'Unvalid username or password' })
                }
                else {
                    req.session.user = checked[0]
                    if (req.session.returnURL != undefined) {
                        res.redirect(req.session.returnURL)
                    }
                    else if (req.session.user.isAdmin == true) {
                        res.redirect('/User/Admin')
                    }
                    else {
                        res.render('user-profile',
                            {
                                layout: 'UserProfile',
                                user: req.session.user,
                                usercheck: req.session.user,
                                cart_total: req.session.cart.length
                            })
                    }
                }
            })

        }

    }

})


//check register -------------------------------
router.post('/Login', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    var username = req.body.User
    var password = req.body.P_WORD
    // bcrypt password


    var email = req.body.Email
    var phone = req.body.Phone
    var dob = req.body.DOB
    var name = req.body.name
    getdata();
    async function getdata() {
        checked = await user_controller.checkUserName(username)
        if (checked[0] != undefined) {
            res.render('Register', { error_mess: 'Username is already been taken', cart_total: req.session.cart.length })

        } else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    password = hash
                    models.User.create({
                        id: username,
                        password: password,
                        name: name,
                        email: email,
                        phone: phone,
                        dob: dob,
                        isAdmin: false,
                        point: 0,
                    })

                    res.render('Login', { cart_total: req.session.cart.length, congrats: "Đăng kí thành công, xin hãy đăng nhập!" })
                })
            })
        }

    }
})

//logout
router.get('/Logout', function (req, res) {
    req.session.user = undefined
    res.redirect('../')

})

//profile -----------------------------------
router.get('/profile', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    res.render('user-profile',
        {
            layout: 'UserProfile',
            user: req.session.user,
            usercheck: req.session.user,
            check: req.session.check,
            cart_total: req.session.cart.length
        })
    req.session.check = undefined
})
router.post('/ChangeProfile', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }

    req.session.user.name = req.body.name
    req.session.user.email = req.body.email
    req.session.user.phone = req.body.phone
    req.session.user.dob = req.body.dob
    req.session.user.gender = req.body.gender
    req.session.user.address = req.body.address
    models.User.update({
        name: req.session.user.name,
        email: req.session.user.email,
        phone: req.session.user.phone,
        dob: req.session.user.dob,
        gender: req.session.user.gender,
        address: req.session.user.address,
    },
        {
            where: { id: req.session.user.id }
        })
    req.session.check = 'Thay đổi thông tin thành công'
    res.redirect('/User/profile')

})
//change pass ---------------------------
router.get('/changepass', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    res.render('user-changepass',
        {
            layout: 'UserProfile',
            user: req.session.user,
            usercheck: req.session.user,
            check: req.session.check,
            cart_total: req.session.cart.length
        })
    req.session.check = undefined
})
router.post('/ChangePass', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.body.old == req.body.new) {
        req.session.check = 'Mật khẩu mới phải khác mật khẩu cũ'
        res.redirect('/User/changepass')
    }
    else {
        bcrypt.compare(req.body.old, req.session.user.password, function (err, check) {
            if (check == false) {
                req.session.check = 'Nhập sai mật khẩu cũ'
                res.redirect('/User/changepass')
            }
            else {

                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(req.body.new, salt, function (err, hash) {
                        req.session.user.password = hash
                        models.User.update({
                            password: req.session.user.password
                        },
                            {
                                where: { id: req.session.user.id }

                            })
                        req.session.check = 'Thay đổi mật khẩu thành công'
                        res.redirect('/User/profile')


                    })
                })

            }
        })

    }


})
//
router.get('/check-order', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {
        var orders = await order_controller.getByUserId(req.session.user.id)
        var finish = []
        var unfinish = []
        if (orders[0] != undefined) {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].status == "Check" || orders[i].status == "Shipping") {
                    unfinish.push(orders[i])
                }
                else {
                    finish.push(orders[i])
                }
            }
        }
        if (req.query.finish == "true") {
            orders = finish
        }
        else if (req.query.finish == "false"){
            orders = unfinish
        }
        res.render('user-checkorder', {
            layout: 'UserProfile',
            cart_total: req.session.cart.length,
            usercheck: req.session.user,
            orders: orders
        })
    }
})
router.get('/Show-order/:id', function (req, res) {
    req.session.congrats = undefined
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {

        var order = await order_controller.getById(req.params.id)
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

        res.render('user-showorder',
            {

                order: order[0],
                product: product,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})
router.get('/submit/:order/:user', function (req, res) {

    models.comments.create({
        content: req.query.comment,
        star: parseInt(req.query.star),
        ProductId: req.query.id,
        UserId: req.session.user.id
    })
    if (req.params.user == "true") {
        res.redirect(`/User/Show-order/${req.params.order}`)
    }
    else {
        res.redirect(`/Check-order/${req.params.order}`)
    }
})
router.get('/DeleteOrder', function (req, res) {
    models.order_detail.destroy({
        where: { orderId: req.query.order }
    })
    models.order.destroy({
        where: { id: req.query.order }
    })
    if (req.query.user == "user"){
        res.redirect("/User/check-order")
    }
    else if (req.query.user == "anonymous"){
        res.redirect("/Check-order")
    }
    else{
        res.redirect("/User/Admin/check-order")
    }
})
router.get('/voucher', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {
        var user_voucher = await voucher_detail_controller.getByUserId(req.session.user.id)
        var voucher = []
        var available = []
        var unavailable = []
        if (user_voucher[0] != undefined) {
            for (let i = 0; i < user_voucher.length; i++) {

                var voucher_info = await voucher_controller.getById(user_voucher[i].voucherId)

                if (voucher_info[0] != undefined) {
                    var today = new Date();
                    var status
                    var startDay = new Date(voucher_info[0].startDay);
                    var expireDay = new Date(voucher_info[0].expireDay)
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                    today = new Date(date)

                    if ((today.getTime() - startDay.getTime()) < 0) {
                        status = "Chưa dùng được"
                        unavailable.push(
                            {
                                id: voucher_info[0].id,
                                startDay: voucher_info[0].startDay,
                                expireDay: voucher_info[0].expireDay,
                                value: voucher_info[0].value,
                                number: user_voucher[i].number,
                                status: status
                            }
                        )
                    }
                    else if ((today.getTime() - expireDay.getTime()) > 0) {
                        status = "Quá hạn sử dụng"
                        unavailable.push(
                            {
                                id: voucher_info[0].id,
                                startDay: voucher_info[0].startDay,
                                expireDay: voucher_info[0].expireDay,
                                value: voucher_info[0].value,
                                number: user_voucher[i].number,
                                status: status
                            }
                        )
                    }
                    else {
                        status = "Có thể dùng"
                        available.push(
                            {
                                id: voucher_info[0].id,
                                startDay: voucher_info[0].startDay,
                                expireDay: voucher_info[0].expireDay,
                                value: voucher_info[0].value,
                                number: user_voucher[i].number,
                                status: status
                            }
                        )
                    }
                    voucher.push(
                        {
                            id: voucher_info[0].id,
                            startDay: voucher_info[0].startDay,
                            expireDay: voucher_info[0].expireDay,
                            value: voucher_info[0].value,
                            number: user_voucher[i].number,
                            status: status
                        }
                    )
                }
            }
        }

        if (req.query.available == "true") {
            voucher = available
        }
        else if (req.query.available == "false") {
            voucher = unavailable
        }
        res.render('user-voucher', {
            layout: 'UserProfile',
            voucher: voucher,
            cart_total: req.session.cart.length,
            usercheck: req.session.user,
        })
    }
})
router.get('/review', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {
        var product = await product_controller.getById(req.query.id)
        var size = await size_controller.getById(req.query.id)
        var stock = 0
        for (let i = 0; i < size.length; i++) {
            stock += size[i].stock
        }
        var size_check = true
        if (stock == 0) {
            size_check = false
        }
        var check = true
        if (req.query.user == undefined) {
            check = false
        }

        res.render("user-review", {
            cart_total: req.session.cart.length,
            usercheck: req.session.user,
            product: product[0],
            check: check,
            size_check: size_check,
            order: req.query.order,
            returnPath: req.originalUrl,
        })
    }
})
//check Admin
var Admin_route = require('./Admin')
router.use('/Admin', Admin_route)

module.exports = router