'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.order)
      User.hasMany(models.voucher_detail)
      User.hasMany(models.comments)
    }
  };
  User.init({
    gender: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    dob: DataTypes.DATEONLY,
    point:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};