'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Products', [
      {
        id: 'A12345',
        type: 1,
        category: "Low-top",
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
      {
        id: 'A61101',
        type: 1,
        category: "High-Top",
        name: "Vintas Mister- CHOCOLATE BROWN",
        brand: "Vintas",
        info: "Công thức pha trộn từ hai chất liệu vải và da lộn đặc trưng, điều thường thấy ở bộ Vintas Mister. Sự kết hợp mạnh mẽ tạo nên nét cổ điển, hoài niệm. Chắc chắn là sự lựa chọn hết bài cho những con người trầm tính và điềm đạm.",
        price: 610000,
        main_img: 'img/pro_A61101_1_1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A61054',
        type: 1,
        category: "Low-top",
        name: "Urbas Bloody Haute Red",
        brand: "Urbas",
        info: "Urbas Bloody - đôi giày có chất liệu Upper hoàn toàn bằng da lộn dành cho những tâm hồn mong muốn nổi bật một cách nổi loạn, sáng tạo một cách sáng chói.",
        price: 440000,
        main_img: 'img/pro_urbas_A61054_1.jpg',
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A6T003',
        type: 1,
        category: "Low-top",
        name: "Ananas Track 6 - Triple Black",
        brand: "Ananas",
        info: "Với cảm hứng từ Retro Sneakers và âm nhạc giai đoạn 1970s, Ananas Track 6 ra đời với danh hiệu là mẫu giày Cold Cement đầu tiên của Ananas - một thương hiệu giày Vulcanized. Chất liệu Storm Leather đáng giá càn quét toàn bộ bề mặt upper cùng những chi tiết thiết kế đặc trưng và mang nhiều ý nghĩa. Chắc rắng, Track 6 sẽ đem đến cho bạn sự tự nhiên thú vị như chính thông điệp bài hát Let it be của huyền thoại The Beatles gửi gắm. Màu all black huyền bí luôn có mặt trong danh sách best seller.",
        price: 1100000,
        main_img: 'img/pro_track6_A6T003_1.jpg',
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
