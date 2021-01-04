var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')
var bcrypt = require('bcrypt')
var voucher_controller = require('../controllers/voucher')
var voucher_detail_controller = require('../controllers/voucher_detail')
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

var models = require('../models')
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
    res.render('user-checkorder', { layout: 'UserProfile', cart_total: req.session.cart.length })
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
                    }
                    else if ((today.getTime() - expireDay.getTime()) > 0) {
                        status = "Quá hạn sử dụng"
                    }
                    else {
                        status = "Có thể dùng"
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

        res.render('user-voucher', {
            layout: 'UserProfile',
            voucher: voucher,
            cart_total: req.session.cart.length,
            usercheck: req.session.user,
        })
    }
})
//check Admin
var Admin_route = require('./Admin')
router.use('/Admin', Admin_route)

module.exports = router