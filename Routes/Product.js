var express = require('express')
var router = express.Router()
// var data = require('../data.js')
// var products = data.products

router.get('/',function(req,res){
    // res.locals.products = products
    // res.render('Product')
    let product_controller = require('../controllers/product')

    getdata();
    async function getdata(){
        var products = await product_controller.getAll()
        console.log(products)
        res.render('Product',{products: products})
        
    }
})

module.exports = router