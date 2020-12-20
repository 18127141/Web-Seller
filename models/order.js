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
    status: DataTypes.STRING,
    totalProduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};