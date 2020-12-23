const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var bcrypt = require('bcrypt')
controller.checkLogin = (req,res,next) => {
    if (req.session.user){
        next()
    } 
    else{
        
        res.redirect(`/User/Login?returnURL=${req.originalUrl}`)
    }
}
controller.checkUserName = (username) => {
    return models.User.findAll({
        where:{
            id : {[Op.like] : username},
        },
        raw:true,
    })

    
}
controller.checkUserName = (username) => {
    return models.User.findAll({
        where:{
            id : {[Op.like] : username},
        },
        raw:true,
    })
}
controller.getAll = () =>{
    return models.Product.findAll({
        raw:true
    })
}

module.exports = controller