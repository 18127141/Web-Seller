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
      {
        img_src: 'img/pro_A61094_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',

      },
      {
        img_src: 'img/pro_A61094_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',

      },
      {
        img_src: 'img/pro_A61094_6.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',

      },
      {
        img_src: 'img/pro_A61094_7.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',

      },
      {
        img_src: 'img/pro_A61094_8.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',

      },
      {
        img_src: 'img/pro_A61101_1_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',

      },
      {
        img_src: 'img/pro_A61101_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',

      },
      {
        img_src: 'img/pro_A61101_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',

      },
      {
        img_src: 'img/pro_A61101_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',

      },
      {
        img_src: 'img/pro_A61101_5.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61101',

      },
      {
        img_src: 'img/pro_urbas_A61054_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',

      },
      {
        img_src: 'img/pro_urbas_A61054_2-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',

      },
      {
        img_src: 'img/pro_urbas_A61054_3-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',

      },
      {
        img_src: 'img/pro_urbas_A61054_4-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',

      },
      {
        img_src: 'img/pro_urbas_A61054_5-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61054',

      },
      {
        img_src: 'img/pro_track6_A6T003_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_5.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_6.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_9.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_track6_A6T003_11.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A6T003',

      },
      {
        img_src: 'img/pro_AHO0010_1-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_2-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_3-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_4-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_5-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_6-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_7-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_AHO0010_8-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AHO0010',

      },
      {
        img_src: 'img/pro_A61113_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_5.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_6.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_13.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/pro_A61113_7.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61113',

      },
      {
        img_src: 'img/Nike_6/img1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61012',

      },
      {
        img_src: 'img/Nike_6/img10.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61012',

      },
      {
        img_src: 'img/Nike_6/img20.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61012',

      },
      {
        img_src: 'img/Nike_6/img28.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61012',

      },
      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('img_srcs', null, {});
     
  }
};
