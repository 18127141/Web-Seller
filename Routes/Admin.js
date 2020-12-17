var express = require('express')
var router = express.Router()
var product_controller = require('../controllers/product')
var size_controller = require('../controllers/size')
var products
var sizes
router.get('/', function (req, res) {
    getdata();
    async function getdata(){
        products = await product_controller.getAll()
        sizes =await size_controller.getAll()
        
    }

    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            res.render('admin-changeProduct', { layout: 'Admin', user: req.session.user, usercheck: req.session.user,products:products,size_stock:sizes, })
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})
module.exports = router