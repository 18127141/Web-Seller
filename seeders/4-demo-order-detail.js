'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('order_details', [
      {
        orderId: 'OR123456789',
        quantity: 1,
        size: "44",
        ProductId: 'A12345',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        orderId: 'OR123456789',
        quantity: 1,
        size: "45",
        ProductId: 'A12345',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('order_details', null, {});

  }
};
