'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('comments', [
      {
        content: 'Sản phẩm rất đẹp và hợp thời trang',
        star: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'them072'
      },
      {
        content: 'Sản phẩm tốt lắm, nhưng chất liệu không được tốt cho lắm',
        star: 4,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'them072'
      },
      {
        content: "Mua về đi vào rất êm ",
        star: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'longanhga123'
      },
      {
        content: "Mới mua về, crush nhìn thấy muốn cưới ;) ",
        star: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'longanhga123'
      },
      {
        content: "Đẹp, tương đối OK ",
        star: 4,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'them072'
      },
      {
        content: "Đẹp, nhưng giá hơi chua so với sản phẩm ",
        star: 3,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A12345',
        UserId: 'longanhga123'
      },
      {
        content: "Đẹp",
        star: 5,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
        ProductId: 'A61094',
        UserId: 'longanhga123'
      },
      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('comments', null, {});

  }
};
