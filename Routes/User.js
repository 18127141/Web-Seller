var express = require('express')
var router = express.Router()

router.get('/Login',function(req,res){
    res.render('Login')
})
router.get('/Register',function(req,res){
    res.render('Register')
})
router.get('/',function(req,res)
{
    res.render('Login',{layout:'UserProfile'})
})
router.get('/profile',function(req,res)
{
    res.render('user-profile',{layout:'UserProfile'})
})
module.exports = router