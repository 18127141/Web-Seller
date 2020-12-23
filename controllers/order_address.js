const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


controller.getById = (ele) => {
    return models.order_address.findAll({
        where: {
            id: {[Op.like] : ele}
            
        },
        raw:true
    })
}
controller.getAll = () =>{
    return models.order_address.findAll({
        raw:true
    })
}
controller.getByUserId = (ele) => {
    return models.order_address.findAll({
        where: {
            UserId: {[Op.like] : ele}
            
        },
        raw:true
    })
}
module.exports = controller