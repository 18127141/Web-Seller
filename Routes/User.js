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
    res.render('user-profile',{layout:'UserProfile'})
})
router.get('/profile',function(req,res)
{
    res.render('user-profile',{layout:'UserProfile'})
})
router.get('/changepass',function(req,res)
{
    res.render('user-changepass',{layout:'UserProfile'})
})
router.get('/check-order',function(req,res)
{
    res.render('user-checkorder',{layout:'UserProfile'})
})
router.get('/voucher',function(req,res)
{
    res.render('user-voucher',{layout:'UserProfile'})
})
module.exports = router