var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
    let size_controller = require('../controllers/size')
    let product_controller = require('../controllers/product')

    getdata();
    async function getdata(){
        var products = await product_controller.getAll()
        var size = await size_controller.getAll()
        res.render('Product',{products: products, size_stock:size})
        
    }
})

module.exports = router