var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
    console.log(req.query)
    res.render('Product')
})

module.exports = router