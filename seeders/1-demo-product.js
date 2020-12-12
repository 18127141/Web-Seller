'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Products', [{
      id: 'A12345',
      type: 1,
      category: "Low-top/Street",
      name: "Nikas Street Fighter",
      brand: "Nikas",
      info: "Sở hữu công thức pha màu khó chịu. Urbas Unsettling tạo nên điểm nhấn mạnh mẽ, gây kích thích thị giác thông qua sự đối lập trong từng gam màu. Điểm chốt hạ cho một outfit đặc biệt thú vị, tách biệt khỏi sự trùng lặp thông thường.",
      price: 100000,
      main_img: 'img/showProduct_Aspect1.jpg',
      gender:"uniset",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
