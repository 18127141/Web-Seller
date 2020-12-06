var express = require('express')
var router = express.Router()
var data = require('../data.js')
var products = data.products

router.get('/',function(req,res){
    res.locals.products = products
    res.render('Product')
})

module.exports = router