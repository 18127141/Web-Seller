var express = require('express')
var router = express.Router()
var data = require('../data.js')
var products = data.products
router.get('/:id',function(req,res){
    var id = req.params.id
    var pos_id = products.find((ele) =>{
        return ele.id ===id
    })
    res.locals.product = pos_id
    console.log(pos_id)
    res.render('Show_product')
})

module.exports = router