const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

controller.checkLogin = (req,res,next) => {
    if (req.session.user){
        next()
    } 
    else{
        res.redirect(`/User/Login?returnURL = ${req.originalURL}`)
    }
}
controller.checkUserNameaAndPass = (username,password) => {
    return models.User.findAll({
        where:{
            id : {[Op.like] : username},
            password : {[Op.like] : password}
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
module.exports = controller