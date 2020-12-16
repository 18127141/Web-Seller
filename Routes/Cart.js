var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')
let cart_controller = require('../controllers/cart')

router.get('/',function(req,res){
   cart = req.session.cart
    console.log(cart)
    res.render('Cart')
})
module.exports = router