const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

controller.getAll = () => {
    return models.comments.findAll({
        raw: true
    })
}
controller.getByUserId = (ele) => {
    return models.comments.findAll({
        where: {
            UserId: { [Op.like]: ele }
        },
        raw: true
    })
}
controller.getByProductId = (ele) => {
    return models.comments.findAll({
        where: {
            ProductId: { [Op.like]: ele }
        },
        raw: true
    })
}
module.exports = controller