'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('orders', [
      {
        id: 'OR123456789',
        totalPrice: 200000,
        discountPrice: 0,
        delivery: '1',
        pay: '1',
        status: 'Shipping',
        totalProduct: 2,
        name: 'Trinh Thanh Long',
        email: 'TTLGame123@gmail.com',
        phone: '0902834151',
        address: '99/4A KP2',
        UserId: 'them072',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
