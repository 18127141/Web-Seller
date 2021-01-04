'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      voucher.hasMany(models.voucher_detail)
    }
  };
  voucher.init({
    startDay: DataTypes.DATEONLY,
    expireDay: DataTypes.DATEONLY,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'voucher',
  });
  return voucher;
};