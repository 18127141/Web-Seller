var express = require('express')
var router = express.Router()
// var data = require('../data.js')
// var products = data.products
router.get('/:id',function(req,res){
    var select_id = req.params.id
    // var pos_id = products.find((ele) =>{
    //     return ele.id ===id
    // })
    // res.locals.product = pos_id
    // res.render('Show_product')

    let product_controller = require('../controllers/product')
    let size_controller = require('../controllers/size')
    let img_controller = require('../controllers/img_src')
    getdata();
    async function getdata(){
        //var product = await product_controller.getById(select_id)
        var product = await product_controller.getById(select_id)
        product = product[0]
        var size = await size_controller.getById(select_id)
        
        var img = await img_controller.getById(select_id)
        res.render('Show_product',{product: product, size_stock:size,img_src: img})
        
    }
})

module.exports = router