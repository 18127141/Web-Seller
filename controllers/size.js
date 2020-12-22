const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
controller.getById = (ele) => {
    return models.size_stock.findAll({
        where: {
            ProductId: {[Op.like] : ele}
        },
        raw:true
    })
}
controller.getAll = () =>{
    return models.size_stock.findAll({
        raw:true
    })
}
controller.getStock = (id,size) => {
    return models.size_stock.findAll({
        where: {
            ProductId: {[Op.like] : id},
            size: size
        },
        raw:true
    })
}
module.exports = controller