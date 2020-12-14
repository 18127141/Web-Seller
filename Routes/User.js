var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')

var checked
//Login
router.get('/Login',function(req,res){
    req.session.returnURL = req.query.returnURL
    res.render('Login')
})

//Register
router.get('/Register',function(req,res){
    res.render('Register')
})
//check admin--------------------------------------
router.get('/Admin',user_controller.isAdmin, (req,res) =>{
    res.render('/Admin')
})
//Check login---------------------------
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

router.post('/',function(req,res)
{
    var username = req.body.User
    var password = req.body.P_WORD
    getdata();
    async function getdata(){
        checked = await user_controller.checkUserNameaAndPass(username,password) 
        
        if(checked[0] == undefined){
            res.render('Login',{error_mess: 'Unvalid username or password'})
            
        } else {
            req.session.user = checked[0]
            res.render('user-profile',{layout:'UserProfile',user:checked[0]})
        }
            
    }
    
})
var models = require('../models')
//check register -------------------------------
router.post('/Login',function(req,res){
    var username = req.body.User
    var password = req.body.P_WORD
    var email = req.body.Email
    var phone = req.body.Phone
    //var check_username
    getdata();
    async function getdata(){
        checked = await user_controller.checkUserName(username) 
        if(checked[0] != undefined){
            res.render('Register',{error_mess: 'Username is already been taken'})
            
        } else {
            models.User.create({
                id:username,
                password:password,
                email:email,
                phone:phone,
                isAdmin:false
            })
            res.render('Login')
        }
            
    }
})

//logout
router.get('/Logout',function(req,res)
{
    req.session.user = undefined
    res.redirect('../')

})

//profile
router.get('/profile',function(req,res)
{
    res.render('user-profile',{layout:'UserProfile',user: checked[0]})
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
router.get('/Admin',function(req,res)
{
    res.render('user-profile',{layout:'Admin'})
})
module.exports = router