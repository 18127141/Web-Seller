// 1 shoe
// 2 cloth
// 3 pant
products = [{
    id: 'A12345',
    type: 1,
    category: "Low-top/Street",
    name: "Nikas Street Fighter",
    brand: "Nikas",
    info: "Sở hữu công thức pha màu khó chịu. Urbas Unsettling tạo nên điểm nhấn mạnh mẽ, gây kích thích thị giác thông qua sự đối lập trong từng gam màu. Điểm chốt hạ cho một outfit đặc biệt thú vị, tách biệt khỏi sự trùng lặp thông thường.",
    price: 100000,
    img_src:['showProduct_Aspect1.jpg','showProduct_Aspect2.jpg','showProduct_Aspect3.jpg','showProduct_Aspect4.jpg','showProduct_Aspect5.jpg'],
    main_img_src: 'showProduct_Aspect1.jpg',
    size_stock: [
        {
            size: 35,
            stock: 3
        },
        {
            size: 36,
            stock: 2
        },
        {
            size: 40,
            stock: 12
        },
        {
            size: 41,
            stock: 11
        },
        {
            size: 42,
            stock: 5
        }
    ],
    gender: "uniset",
}]
module.exports.products = products