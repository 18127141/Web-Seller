'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('size_stocks', [
      {
        size: "35",
        stock: 3,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
      },
      {
        size: "36",
        stock: 2,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
      },
      {
        size: "37",
        stock: 11,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
      },
      {
        size: "44",
        stock: 1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',
      },
      {
        size: "45",
        stock: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',
      },
      {
        size: "43",
        stock: 0,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',
      },
      {
        size: "44",
        stock: 0,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',
      },
      {
        size: "45",
        stock: 0,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',
      },
      {
        size: "43",
        stock: 10,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',
      },
      {
        size: "44",
        stock: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',
      },
      {
        size: "45",
        stock: 2,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',
      },
      {
        size: "45",
        stock: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',
      },
      {
        size: "40",
        stock: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',
      },
      {
        size: "41",
        stock: 9,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',
      },
      {
        size: "42",
        stock: 3,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('size_stocks', null, {});

  }
};
