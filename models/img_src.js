'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class img_src extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      img_src.belongsTo(models.Product)
    }
  };
  img_src.init({
    img_src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'img_src',
  });
  return img_src;
};