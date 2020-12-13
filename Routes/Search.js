var express = require('express')
var router = express.Router()
router.get('/',function(req,res){
    var search_word = req.query.search
    console.log(search_word)
    let product_controller = require('../controllers/product')

    getdata();
    async function getdata(){
        var products = await product_controller.searchByNameAndId(search_word)
        res.render('Search',{products: products})
        
    }
})

module.exports = router