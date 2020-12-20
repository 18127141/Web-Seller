'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Products', [
      {
        id: 'A12345',
        type: 1,
        category: "Low-top/Street",
        name: "Nikas Street Fighter",
        brand: "Nikas",
        info: "Sở hữu công thức pha màu khó chịu. Urbas Unsettling tạo nên điểm nhấn mạnh mẽ, gây kích thích thị giác thông qua sự đối lập trong từng gam màu. Điểm chốt hạ cho một outfit đặc biệt thú vị, tách biệt khỏi sự trùng lặp thông thường.",
        price: 100000,
        main_img: 'img/showProduct_Aspect1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A61107',
        type: 1,
        category: "High-Top",
        name: "Urbas Unsettling",
        brand: "Urbas",
        info: "Sở hữu công thức pha màu khó chịu. Urbas Unsettling tạo nên điểm nhấn mạnh mẽ, gây kích thích thị giác thông qua sự đối lập trong từng gam màu. Điểm chốt hạ cho một outfit đặc biệt thú vị, tách biệt khỏi sự trùng lặp thông thường.",
        price: 550000,
        main_img: 'img/pro_A61107_1.jpg',
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A61094',
        type: 1,
        category: "High-Top",
        name: "Ananas X Lucky Luke Pattas",
        brand: "Ananas",
        info: "Phiên bản đặc biệt bất ngờ dành riêng cho bộ sản phẩm Collaboration với mục đích tôn vinh nét vẽ của tác giả Morris. Qua việc không chỉ xuất hiện đầy đủ các nhân vật tuyến chính xuất hiện trong bộ truyện, mà còn kèm theo nhiều chi tiết tinh tế ở được bố trí khắp nơi. Ra mắt với số lượng giới hạn trong môt chiếc hộp khác biệt nhằm tạo dấu ấn đậm nét cho lần hợp tác quốc tế đầu tiên này.",
        price: 890000,
        main_img: 'img/pro_A61094_2.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
