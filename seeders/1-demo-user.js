'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        id: "them072",
        gender: 'Male',
        name: "Thanh Long",
        email: 'ttlgame123@gmail.com',
        password: 'tlong123',
        phone: '0902834151',
        address: '99/4a',
        isAdmin: true,
        age: 20,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: "longanhga123",
        gender: 'Male',
        name: "Thanh Long",
        email: 'ttlgame123@gmail.com',
        password: 'tlong123',
        phone: '0902834151',
        address: '99/4a',
        isAdmin: false,
        age: 20,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
