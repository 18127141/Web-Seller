'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('voucher_details', [
      {
        number:3,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        UserId: 'them072',
        voucherId: '#NONAMENOVEMBER'
      },
      {
        number:1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        UserId: 'them072',
        voucherId: '#NEWMEMBER'
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('voucher_details', null, {});

  }
};
