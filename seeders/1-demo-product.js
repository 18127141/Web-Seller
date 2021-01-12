'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Products', [
      {
        id: 'A12345',
        type: 1,
        category: "Low-Top",
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
        category: "Low-Top",
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
        category: "Low-Top",
        name: "Ananas Track 6 - Triple Black",
        brand: "Ananas",
        info: "Với cảm hứng từ Retro Sneakers và âm nhạc giai đoạn 1970s, Ananas Track 6 ra đời với danh hiệu là mẫu giày Cold Cement đầu tiên của Ananas - một thương hiệu giày Vulcanized. Chất liệu Storm Leather đáng giá càn quét toàn bộ bề mặt upper cùng những chi tiết thiết kế đặc trưng và mang nhiều ý nghĩa. Chắc rắng, Track 6 sẽ đem đến cho bạn sự tự nhiên thú vị như chính thông điệp bài hát Let it be của huyền thoại The Beatles gửi gắm. Màu all black huyền bí luôn có mặt trong danh sách best seller.",
        price: 1100000,
        main_img: 'img/pro_track6_A6T003_1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AHO0010',
        type: 3,
        category: "Hoodie",
        name: "Doraemon 50 Years Hoodie",
        brand: "Ananas",
        info: "Chiếc Hoodie màu Black căn bản sở hữu nhiều graphic truyện tranh Doraemon ẩn giấu. Điểm nhấn đặc biệt từ logo Doraemon phiên bản tiếng Nhật đặc trưng với hiệu ứng ép nổi 3D độc đáo và chiếc túi trước bụng, tuy không phải túi thần kì nhưng sẽ mang đến cho bạn những ứng dụng bất ngờ.",
        price: 800000,
        main_img: 'img/pro_AHO0010_1-1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A61113',
        type: 1,
        category: "Low-Top",
        name: "Ananas Doraemon 50 YEARS Pattas",
        brand: "Ananas",
        info: "Ananas x Doraemon 50 Years Pattas thể hiện chân thật nét vẽ nguyên bản của bộ truyện từ cái nhìn đầu tiên. Sử dụng chất liệu Action Leather (da) phủ khắp thân giày, pha trộn cùng các chi tiết đắt giá được sắp đặt hợp lí. Ra mắt với số lượng đặc biệt giới hạn, phiên bản này phát hành với mục đích kỉ niệm, tôn vinh giá trị mà bộ truyện Doraemon đã mang lại suốt 50 năm qua.",
        price: 1000000,
        main_img: 'img/pro_A61113_1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A61012',
        type: 1,
        category: "Low-Top",
        name: "Nike LeBron 6 Bred",
        brand: "Nike",
        info: "Với cảm hứng từ Retro Sneakers và âm nhạc giai đoạn 1970s, Ananas Track 6 ra đời với danh hiệu là mẫu giày Cold Cement đầu tiên của Ananas - một thương hiệu giày Vulcanized. Chất liệu Storm Leather đáng giá càn quét toàn bộ bề mặt upper cùng những chi tiết thiết kế đặc trưng và mang nhiều ý nghĩa. Chắc rắng, Track 6 sẽ đem đến cho bạn sự tự nhiên thú vị như chính thông điệp bài hát Let it be của huyền thoại The Beatles gửi gắm. Màu all black huyền bí luôn có mặt trong danh sách best seller.",
        price: 3500000,
        main_img: 'img/Nike_6/img1.jpg',
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AGT0020',
        type: 3,
        category: "T-shirt",
        name: "Graphic Pocket Tee 50 YEARS - Cloud Dance",
        brand: "Ananas",
        info: "Ananas Graphic Tee sở hữu phom dáng rộng thoải mái với chất vải 100% cotton dày vừa phải. Kết hợp chi tiết từ bộ truyện Doraemon cùng Typo đặc trưng kỉ niệm 50 năm tạo nên chiếc Pocket cá tính bên ngực trái. Chiếc áo là mảnh ghép phù hợp cho những bạn yêu thích Doraemon và muốn lưu dấu cột mốc đặc biệt này.",
        price: 600000,
        main_img: 'img/pro_AGT0020_1.jpg',
        gender: "Female",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'A11111',
        type: 2,
        category: "Long pants",
        name: "DADDY-SWEATPANTS",
        brand: "Uniq",
        info: "DADDY-SWEATPANTS sở hữu phom dáng rộng thoải mái với chất vải 100% cotton dày vừa phải. ",
        price: 900000,
        main_img: 'img/pro_A11111_1.jpg',
        gender: "Female",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AGT0013',
        type: 3,
        category: "T-shirt",
        name: "GRAPHIC TEE - LUCKY LUKE COMICS - CAVIAR BLACK",
        brand: "Ananas",
        info: "Những chiếc áo Ananas Graphic Tee có phom dáng thoải mái, rộng linh hoạt được kết hợp cùng hoạ tiết lấy cảm hứng từ bộ truyện tuổi thơ Lucky Luke. Đây sẽ là một mảnh ghép cho những outfit thú vị, dù đủ bộ hay mặc riêng lẻ vẫn khẳng định cá tính riêng biệt, ghi dấu ấn cho lần hợp tác quốc tế đầu tiên của Ananas.",
        price: 365000,
        main_img: "img/AGT0013_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AGT0016',
        type: 3,
        category: "T-shirt",
        name: "GRAPHIC TEE - LUCKY LUKE TYPO - BANANA CREPE",
        brand: "Ananas",
        info: "Những chiếc áo Ananas Graphic Tee có phom dáng thoải mái, rộng linh hoạt được kết hợp cùng hoạ tiết lấy cảm hứng từ bộ truyện tuổi thơ Lucky Luke. Đây sẽ là một mảnh ghép cho những outfit thú vị, dù đủ bộ hay mặc riêng lẻ vẫn khẳng định cá tính riêng biệt, ghi dấu ấn cho lần hợp tác quốc tế đầu tiên của Ananas.",
        price: 365000,
        main_img: "img/AGT0016_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AGT0014',
        type: 3,
        category: "T-shirt",
        name: "GRAPHIC TEE - MOST WANTED DALTON - CAVIAR BLACK",
        brand: "Ananas",
        info: "Những chiếc áo Ananas Graphic Tee có phom dáng thoải mái, rộng linh hoạt được kết hợp cùng hoạ tiết lấy cảm hứng từ bộ truyện tuổi thơ Lucky Luke. Đây sẽ là một mảnh ghép cho những outfit thú vị, dù đủ bộ hay mặc riêng lẻ vẫn khẳng định cá tính riêng biệt, ghi dấu ấn cho lần hợp tác quốc tế đầu tiên của Ananas.",
        price: 365000,
        main_img: "img/AGT0014_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11111',
        type: 2,
        category: "Jean",
        name: "Quần jean trơn form straight crop",
        brand: "Routine",
        info: `Chất liệu: 98% cotton, 2% spandex.

        Đặc tính: Co giãn, hút ẩm tốt và thấm hút mồ hôi.
        
        Hướng dẫn sử dụng:
        
        - Giặt ở nhiệt độ bình thường.
        
        - Không được dùng hóa chất tẩy, ủi ở nhiệt độ thích hợp.
        
        - Hạn chế sử dụng máy sấy.`,
        price: 500000,
        main_img: "img/AT11111_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11112',
        type: 2,
        category: "Jean",
        name: "Quần jean trơn form straight crop",
        brand: "Routine",
        info: `Chất liệu: 98% cotton, 2% spandex.

        Đặc tính: Co giãn, hút ẩm tốt và thấm hút mồ hôi.
        
        Hướng dẫn sử dụng:
        
        - Giặt ở nhiệt độ bình thường.
        
        - Không được dùng hóa chất tẩy, ủi ở nhiệt độ thích hợp.
        
        - Hạn chế sử dụng máy sấy.`,
        price: 700000,
        main_img: "img/AT11112_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11113',
        type: 2,
        category: "Jean",
        name: "Quần Jean rách gối form jogger",
        brand: "Routine",
        info: `Chất liệu: 98% cotton, 2% spandex.

        Đặc tính: Co giãn, hút ẩm tốt và thấm hút mồ hôi.
        
        Hướng dẫn sử dụng:
        
        - Giặt ở nhiệt độ bình thường.
        
        - Không được dùng hóa chất tẩy, ủi ở nhiệt độ thích hợp.
        
        - Hạn chế sử dụng máy sấy.`,
        price: 700000,
        main_img: "img/AT11113_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11114',
        type: 2,
        category: "Long pants",
        name: "Quần Tây Nam Xám",
        brand: "Routine",
        info: `Quần Tây nam Kenta với form dáng slim fit sang trọng đầy lịch lãm. Thích hợp mặc đi làm, đi chơi, lót trong sắc nét, tạo cảm giác thoải mái khi di chuyển, làm việc. Chất liệu vãi mịn mát, có co giãn nhẹ, họa tiết caro nhuyễn, lên form cực sang.

        Hướng dẫn bảo quản:
        
        - Không dùng hóa chất tẩy.
        
        - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.
        
        - Giặt ở chế độ bình thường, với đồ có màu tương tự.`,
        price: 1000000,
        main_img: "img/AT11114_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11115',
        type: 2,
        category: "Jogger",
        name: "Quần Jogger Thun Đen Trơn",
        brand: "Kenta",
        info: `Năng động và thoải mái cùng quần Jogger Nỉ, dễ dàng kết hợp đồ.

        Chất liệu: thun nỉ da cá, mát lạnh.
        
        Hướng dẫn bảo quản:
        
        - Không dùng hóa chất tẩy.
        
        - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.
        
        - Giặt ở chế độ bình thường, với đồ có màu tương tự.`,
        price: 100000,
        main_img: "img/AT11115_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11116',
        type: 2,
        category: "Jogger",
        name: "Quần jogger nam Puma x Tyakasha",
        brand: "Puma",
        info: `hành phần vải: Cotton and elastane
        Thiết kế quần jooger thun nam tính, năng động
        Phom dáng chuẩn, với phần in hình sắc nét
        Chất vải thấm hút tốt
        Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
        Xuất xứ: vui lòng tham khảo tag của sản phẩm`,
        price: 890000,
        main_img: "img/AT11116_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AT11117',
        type: 2,
        category: "Jogger",
        name: "Quần jogger nam Tailored for Sport OG",
        brand: "Puma",
        info: `Chất liệu: 100% nylon
        Kiểu dáng quần jogger năng động, thể thao
        Đậm phong Sporty trẻ trung, cộng hưởng cùng cách phối màu xen kẽ 
        Chất vải mềm mịn, thấm hút tốt 
        Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
        Xuất xứ: vui lòng xem trên tag của sản phẩm`,
        price: 1890000,
        main_img: "img/AT11117_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AGT1111',
        type: 3,
        category: "T-shirt",
        name: "Áo thun ngắn tay cổ tròn Baby Face",
        brand: "Puma",
        info: `Chất liệu: 100% Cotton 
        Kiểu dáng áo thun phom suông năng động
        Tay ngắn, cổ tròn
        Cộng hưởng cùng chi tiết hình in sắc nét ở ngực
        Lưng in tên thương hiệu nổi bật
        Chất vải mềm mịn, thấm hút tốt
        Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
        Xuất xứ thương hiệu: Hàn Quốc`,
        price: 1490000,
        main_img: "img/AGT1111_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },{
      id: 'AGT1112',
      type: 3,
      category: "Long-sleeve",
      name: "Áo Thun Trơn Tay Dài",
      brand: "Kenta",
      info: `Áo thun trơn tay dài, sang trọng và lịch lãm

      Chất liệu: cotton 100%, co giãn 4 chiều
      
      Hướng dẫn bảo quản:
      
      - Không dùng hóa chất tẩy.
      
      - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.
      
      - Giặt ở chế độ bình thường, với đồ có màu tương tự.`,
      price: 490000,
      main_img: "img/AGT1112_1.jpg",
      gender: "Unisex",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
      {
        id: 'AT11118',
        type: 2,
        category: "Short-pant",
        name: "Quần Short Kaki Xanh Đen",
        brand: "Kenta",
        info: `Quần Short Kaki năng động trẻ trung, from Slim.

        Chất liệu: vải kaki co giãn, bền màu.
        
        Hướng dẫn bảo quản:
        
        - Không dùng hóa chất tẩy.
        
        - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.
        
        - Giặt ở chế độ bình thường, với đồ có màu tương tự.`,
        price: 160000,
        main_img: "img/AT11118_1.jpg",
        gender: "Male",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AC11111',
        type: 1,
        category: "Sneaker",
        name: "Chuck 70 Explore Roots High Top",
        brand: "Converse",
        info: `Chất liệu: Canvas`,
        price: 5000000,
        main_img: "img/AC11111_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AC11112',
        type: 1,
        category: "Sneaker",
        name: "Chuck 70 Explore Roots High Top",
        brand: "Converse",
        info: `Chất liệu: Canvas`,
        price: 5000000,
        main_img: "img/AC11112_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AC11113',
        type: 1,
        category: "Sneaker",
        name: "Chuck Taylor All Star CX Explore Roots Low Top",
        brand: "Converse",
        info: `Chất liệu: Canvas`,
        price: 5600000,
        main_img: "img/AC11113_1.jpg",
        gender: "Unisex",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        id: 'AC11114',
        type: 1,
        category: "Sneaker",
        name: "Chuck 70 High-Top Mi Gente",
        brand: "Converse",
        info: `Chất liệu: Canvas`,
        price: 5600000,
        main_img: "img/AC11114_1.jpg",
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
