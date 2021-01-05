const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


controller.getById = (ele) => {
    return models.order_detail.findAll({
        where: {
            ProductId: {[Op.like] : ele}
            
        },
        raw:true
    })
}
controller.getByOrderId = (ele) => {
    return models.order_detail.findAll({
        where: {
            orderId: {[Op.like] : ele}
            
        },
        raw:true
    })
}
controller.getAll = () =>{
    return models.order_detail.findAll({
        raw:true
    })
}

module.exports = controller