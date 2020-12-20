var express = require('express')
var router = express.Router()
let user_controller = require('../controllers/user')

router.get('/',function(req,res){
    res.render('Cart')
})
module.exports = router