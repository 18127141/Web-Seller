const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
controller.getAll = () =>{
    return models.Product.findAll({
        raw:true
    })
}
controller.getById = (ele) => {
    return models.Product.findAll({
        where: {
            id: {[Op.like] : ele}
            
        },
        raw:true
    })
}
controller.searchByNameAndId = (ele) => {
    return models.Product.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: '%' + ele + '%' } },
          { id: { [Op.iLike]: '%' + ele + '%' } },
        ]
      },
      raw: true
    })
  }
module.exports = controller