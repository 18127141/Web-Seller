'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        id: "them072",
        gender: 'Male',
        name: "Thanh Long",
        email: 'ttlgame123@gmail.com',
        password: '$2b$10$r2TBCmfksOpRZ8YU9fuyLOBiHBO1iOUc9clkpTC89VTaSTjBF8JjO',
        phone: '0902834151',
        address: '99/4a',
        isAdmin: true,
        dob: '2000/02/10',
        point: 1000,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: "longanhga123",
        gender: 'Male',
        name: "Thanh Long",
        email: 'ttlgame123@gmail.com',
        password: '$2b$10$r2TBCmfksOpRZ8YU9fuyLOBiHBO1iOUc9clkpTC89VTaSTjBF8JjO',
        phone: '0902834151',
        address: '99/4a',
        isAdmin: false,
        dob: '2000/02/10',
        point: 0,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: "admin",
        gender: 'Male',
        name: "Thanh Long",
        email: 'ttlgame123@gmail.com',
        password: '$2b$10$QEEzdGNfK27JRgSTIGEzWe0ZKE0ClCNrA17/ih5qLuJ2FK1aR5muS',
        phone: '0902834151',
        address: '99/4a',
        isAdmin: true,
        dob: '2000/02/10',
        point: 1000,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
