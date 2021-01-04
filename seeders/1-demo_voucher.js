'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('vouchers', [
      {
        id :"#NONAMENOVEMBER",
        startDay : '2021/4/10',
        expireDay : '2021/11/10',
        value: -100000,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id :"#NEWMEMBER",
        startDay : '2021/1/1',
        expireDay : '2021/11/10',
        value: -50000,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('vouchers', null, {});

  }
};
