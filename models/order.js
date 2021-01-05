'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.User)
      order.hasMany(models.order_detail)
    }
  };
  order.init({
    totalPrice: DataTypes.DECIMAL,
    discountPrice: DataTypes.DECIMAL,
    delivery:DataTypes.STRING,
    pay:DataTypes.STRING,
    status: DataTypes.STRING,
    totalProduct: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};