const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
controller.getAll = () => {
  return models.Product.findAll({
    raw: true
  })
}
controller.getById = (ele) => {
  return models.Product.findAll({
    where: {
      id: { [Op.like]: ele }

    },
    raw: true
  })
}
controller.getByGender = (ele) => {
  return models.Product.findAll({
    where: {
      gender: { [Op.like]: ele }

    },
    raw: true
  })
}
controller.getByCategory = (ele) => {
  return models.Product.findAll({
    where: {
      category: { [Op.like]: ele }

    },
    raw: true
  })
}
controller.getByBrand = (ele) => {
  return models.Product.findAll({
    where: {
      brand: { [Op.like]: ele }

    },
    raw: true
  })
}
controller.getByType = (ele) => {
  return models.Product.findAll({
    where: {
      type: ele, 
    },
    raw: true
  })
}
controller.getExceptId = (ele) => {
  return models.Product.findAll({
    where: {
      [Op.not]: {
        id: { [Op.like]: ele }
      }
    },
    raw: true
  })
}
controller.getbyPriceBetween = (ele1,ele2) =>{
  return models.Product.findAll({
    where: {
      price:{
        [Op.between]: [ele1,ele2]
      }
    },
    raw:true
  })
  };
  controller.getbyPriceGreater = (ele1) =>{
    return models.Product.findAll({
      where: {
        price:{
          [Op.gte]: ele1
        }
      },
      raw:true
    })
    };
    
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