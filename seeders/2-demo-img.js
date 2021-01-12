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
      {
        img_src: 'img/pro_AGT0020_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0020',
      },
      {
        img_src: 'img/pro_AGT0020_2-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0020',
      },
      {
        img_src: 'img/pro_AGT0020_3-2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0020',
      },
      {
        img_src: 'img/pro_AGT0020_4-1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0020',
      },
      {
        img_src: 'img/pro_A11111_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A11111',
      },
      {
        img_src: 'img/pro_A11111_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A11111',
      },
      {
        img_src: 'img/AGT0013_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0013',
      },
      {
        img_src: 'img/AGT0013_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0013',
      },
      {
        img_src: 'img/AGT0013_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0013',
      },
      {
        img_src: 'img/AGT0013_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0013',
      },
      {
        img_src: 'img/AGT0016_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0016',
      },
      {
        img_src: 'img/AGT0016_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0016',
      },    {
        img_src: 'img/AGT0016_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0016',
      },    {
        img_src: 'img/AGT0016_4.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0016',
      },
      {
        img_src: 'img/AGT0014_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0014',
      },
      {
        img_src: 'img/AGT0014_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0014',
      },
      {
        img_src: 'img/AGT0014_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT0014',
      },
      {
        img_src: 'img/AT11111_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11111',
      },  {
        img_src: 'img/AT11111_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11111',
      },  {
        img_src: 'img/AT11111_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11111',
      },
      {
        img_src: 'img/AT11112_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11112',
      },  {
        img_src: 'img/AT11112_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11112',
      },  {
        img_src: 'img/AT11112_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11112',
      },
      {
        img_src: 'img/AT11113_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11113',
      },  {
        img_src: 'img/AT11113_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11113',
      },  {
        img_src: 'img/AT11113_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11113',
      },
      {
        img_src: 'img/AT11114_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11114',
      },  {
        img_src: 'img/AT11114_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11114',
      },  {
        img_src: 'img/AT11114_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11114',
      },
      {
        img_src: 'img/AT11115_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11115',
      },  {
        img_src: 'img/AT11115_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11115',
      },  {
        img_src: 'img/AT11115_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11115',
      },
      {
        img_src: 'img/AT11116_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11116',
      },  {
        img_src: 'img/AT11116_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11116',
      },  {
        img_src: 'img/AT11116_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11116',
      },
      {
        img_src: 'img/AT11117_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11117',
      },  {
        img_src: 'img/AT11117_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11117',
      }, 
      {
        img_src: 'img/AGT1111_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT1111',
      },  {
        img_src: 'img/AGT1111_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT1111',
      }, 
      {
        img_src: 'img/AGT1112_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT1112',
      },  {
        img_src: 'img/AGT1112_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AGT1112',
      }, 
      {
        img_src: 'img/AT11118_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11118',
      },  {
        img_src: 'img/AT11118_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11118',
      },  {
        img_src: 'img/AT11118_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AT11118',
      },
      {
        img_src: 'img/AC11111_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11111',
      },  {
        img_src: 'img/AC11111_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11111',
      },  {
        img_src: 'img/AC11111_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11111',
      },
      {
        img_src: 'img/AC11112_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11112',
      },  {
        img_src: 'img/AC11112_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11112',
      },  {
        img_src: 'img/AC11112_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11112',
      },
      {
        img_src: 'img/AC11113_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11113',
      },  {
        img_src: 'img/AC11113_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11113',
      },  {
        img_src: 'img/AC11113_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11113',
      },
      {
        img_src: 'img/AC11114_1.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11114',
      },  {
        img_src: 'img/AC11114_2.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11114',
      },  {
        img_src: 'img/AC11114_3.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'AC11114',
      },
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('img_srcs', null, {});
     
  }
};
