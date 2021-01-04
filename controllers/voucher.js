const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

controller.getAll = () =>{
    return models.voucher.findAll({
        raw:true
    })
}
controller.getById = (ele) => {
    return models.voucher.findAll({
      where: {
        id: { [Op.iLike]: ele }
  
      },
      raw: true
    })
  }
module.exports = controller