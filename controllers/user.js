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

controller.searchByEverything = (ele) => {
    return models.User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: '%' + ele + '%' } },
          { id: { [Op.iLike]: '%' + ele + '%' } },
          { phone: { [Op.iLike]: '%' + ele + '%' } },
          { email: { [Op.iLike]: '%' + ele + '%' } },
        ]
      },
      raw: true
    })
  }
controller.getAll = () =>{
    return models.User.findAll({
        raw:true
    })
}

module.exports = controller