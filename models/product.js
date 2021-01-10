'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.size_stock)
      Product.hasMany(models.img_src)
      Product.hasMany(models.order_detail)
      Product.hasMany(models.comments)
    }
  };
  Product.init({
    type: DataTypes.INTEGER,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    info: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    main_img: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};