var express = require('express')
var router = express.Router()
module.exports = router
router.get('/', function (req, res) {
    
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            res.render('admin-changeProduct', { layout: 'Admin', user: req.session.user, usercheck: req.session.user })
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})