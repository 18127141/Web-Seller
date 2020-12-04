var express = require('express')
var router = express.Router()

router.get('/Login',function(req,res){
    res.render('Login')
})
router.get('/Register',function(req,res){
    res.render('Register')
})
module.exports = router