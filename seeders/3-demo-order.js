'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('orders', [
      {
        id: 'OR12345678',
        totalPrice: 200000,
        status: 'Shipping',
        totalProduct: 2,
        UserId:'them072',
        order_addressId:'them072',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
