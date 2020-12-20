'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('order_addresses', [
      {
        id:'them072',
        UserId:'them072',
        name:'Trinh Thanh Long',
        email: 'TTLGame123@gmail.com',
        phone:'0902834151',
        address:'99/4A KP2',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('order_addresses', null, {});

  }
};
