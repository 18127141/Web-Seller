var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')


var checked
//Login
router.get('/Login', function (req, res) {
    req.session.returnURL = req.query.returnURL
    res.render('Login')
})

//Register
router.get('/Register', function (req, res) {
    res.render('Register')
})

//Check login---------------------------
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/', function (req, res) {
    var username = req.body.User
    var password = req.body.P_WORD
    getdata();
    async function getdata() {
        checked = await user_controller.checkUserNameaAndPass(username, password)

        if (checked[0] == undefined) {
            res.render('Login', { error_mess: 'Unvalid username or password' })

        } else {
            req.session.user = checked[0]
            if (req.session.returnURL != undefined) {
                res.redirect(req.session.returnURL)
            }
            else if (req.session.user.isAdmin == true) {
                res.redirect('/User/Admin')
            }
            else {
                res.render('user-profile', { layout: 'UserProfile', user: req.session.user, usercheck: req.session.user })
            }
        }

    }

})

var models = require('../models')
//check register -------------------------------
router.post('/Login', function (req, res) {
    var username = req.body.User
    var password = req.body.P_WORD
    var email = req.body.Email
    var phone = req.body.Phone
    var dob = req.body.DOB

    //var check_username
    getdata();
    async function getdata() {
        checked = await user_controller.checkUserName(username)
        if (checked[0] != undefined) {
            res.render('Register', { error_mess: 'Username is already been taken' })

        } else {
            models.User.create({
                id: username,
                password: password,
                email: email,
                phone: phone,
                dob: dob,
                isAdmin: false
            })
            res.render('Login')
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

    res.render('user-profile', { layout: 'UserProfile', user: req.session.user, usercheck: req.session.user, check: req.session.check })
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
    res.render('user-changepass', { layout: 'UserProfile', user: req.session.user, usercheck: req.session.user,check:req.session.check })
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
    else if (req.body.old != req.session.user.password) {
        req.session.check = 'Nhập sai mật khẩu cũ'
        res.redirect('/User/changepass')
    }
    else {
        req.session.user.password = req.body.new
        models.User.update({
            password: req.session.user.password
        },
            {
                where: { id: req.session.user.id }

            })
        req.session.check = 'Thay đổi mật khẩu thành công'
        res.redirect('/User/profile')
    }

})
//
router.get('/check-order', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    res.render('user-checkorder', { layout: 'UserProfile' })
})
router.get('/voucher', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    res.render('user-voucher', { layout: 'UserProfile' })
})
//check Admin
var Admin_route = require('./Admin')
router.use('/Admin', Admin_route)

module.exports = router