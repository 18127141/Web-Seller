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
module.exports = controller