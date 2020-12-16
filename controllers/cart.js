const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.user = oldCart.user || {};
}