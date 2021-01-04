'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voucher_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      voucher_detail.belongsTo(models.User)
      voucher_detail.belongsTo(models.voucher)
    }
  };
  voucher_detail.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'voucher_detail',
  });
  return voucher_detail;
};