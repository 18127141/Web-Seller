'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('img_srcs', [
      {
        img_src: 'img/showProduct_Aspect1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',

      },
      {
        img_src: 'img/showProduct_Aspect2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',

      },
      {
        img_src: 'img/showProduct_Aspect3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',

      },
      {
        img_src: 'img/showProduct_Aspect4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',

      },
      {
        img_src: 'img/showProduct_Aspect5.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',

      },
      {
        img_src: 'img/pro_A61107_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',

      },
      {
        img_src: 'img/pro_A61107_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',

      },
      {
        img_src: 'img/pro_A61107_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',

      },
      {
        img_src: 'img/pro_A61107_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',

      },
      {
        img_src: 'img/pro_A61107_5.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61107',

      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('img_srcs', null, {});
     
  }
};
