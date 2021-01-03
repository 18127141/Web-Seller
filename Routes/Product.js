var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    let size_controller = require('../controllers/size')
    let product_controller = require('../controllers/product')
    var congrats = req.session.congrats
    req.session.congrats = undefined
    getdata();
    async function getdata() {
        function union_arrays(x, y) {
            var obj = {};
            for (let i = 0; i < x.length; i++)
                obj[x[i].id] = x[i];
            for (let i = 0; i < y.length; i++)
                obj[y[i].id] = y[i];

            var res = []
            for (var k in obj) {

                res.push(obj[k]);
            }
            return res;
        }

        var products = []
        var gender_display
        var type_display = [], category_display = [], brand_display = [], price_display = []
        if (req.query.search != undefined) {
            products = await product_controller.searchByNameAndId(req.query.search)

        }
        else {
            //gender

            if (req.query.Gender == undefined || req.query.Gender == "Male,Female") {
                products = await product_controller.getAll()
                gender_display = "All"
            } else {
                products = await product_controller.getByGender("Unisex")
                var temp = await product_controller.getByGender(req.query.Gender)
                for (let i = 0; i < temp.length; i++) {
                    products.push(temp[i])
                }
                gender_display = req.query.Gender
            }

            //initiate -------------
            var category = []
            var category_temp = {}
            var brand = []
            var brand_temp = {}

            //Product type
            if (req.query.Type != undefined && req.query.Type != "") {
                type_display = req.query.Type.split(",")
                temp = await product_controller.getByType(parseInt(type_display[0]))
                for (let i = 1; i < type_display.length; i++) {
                    let take_product = await product_controller.getByType(parseInt(type_display[i]))
                    temp = union_arrays(temp, take_product)
                }
                products = products.filter(ele1 => temp.some(ele2 => ele1.id == ele2.id))

            }

            //Category
            if (req.query.Category != undefined && req.query.Category != "") {
                category_display = req.query.Category.split(",")
                // check if Type is inputed but you've already chose a different category
                if (req.query.Type != undefined && req.query.Type != "") {
                    category_display = category_display.filter(ele1 => products.some(ele2 => ele1 == ele2.category))

                }
                if (category_display[0] != undefined) {
                    temp = await product_controller.getByCategory(category_display[0])
                    for (let i = 1; i < category_display.length; i++) {
                        let take_product = await product_controller.getByCategory(category_display[i])
                        temp = union_arrays(temp, take_product)
                    }
                    for (let i = 0; i < products.length; i++) {
                        if (brand_temp[products[i].brand] == undefined) {
                            brand_temp[products[i].brand] = true
                            brand.push({ id: products[i].brand })
                        }
                    }
                    for (let i = 0; i < products.length; i++) {
                        if (category_temp[products[i].category] == undefined) {
                            category_temp[products[i].category] = true
                            category.push({ id: products[i].category })
                        }
                    }

                    products = products.filter(ele1 => temp.some(ele2 => ele1.id == ele2.id))
                }
            }
            //Brand
            if (req.query.Brand != undefined && req.query.Brand != "") {
                brand_display = req.query.Brand.split(",")
                // check if Type is inputed but you've already chose a different brand
                if (req.query.Type != undefined && req.query.Type != "") {
                    brand_display = brand_display.filter(ele1 => products.some(ele2 => ele1 == ele2.brand))

                }
                if (brand_display[0] != undefined) {
                    temp = await product_controller.getByBrand(brand_display[0])
                    for (let i = 1; i < brand_display.length; i++) {
                        let take_product = await product_controller.getByBrand(brand_display[i])
                        temp = union_arrays(temp, take_product)
                    }
                    for (let i = 0; i < products.length; i++) {
                        if (brand_temp[products[i].brand] == undefined) {
                            brand_temp[products[i].brand] = true
                            brand.push({ id: products[i].brand })
                        }
                    }
                    for (let i = 0; i < products.length; i++) {
                        if (category_temp[products[i].category] == undefined) {
                            category_temp[products[i].category] = true
                            category.push({ id: products[i].category })
                        }
                    }
                    products = products.filter(ele1 => temp.some(ele2 => ele1.id == ele2.id))
                }
            }
            //Price
            if (req.query.Price != undefined && req.query.Price != "") {
                price_display = req.query.Price.split(",")

                if (price_display[0] == "3000") {
                    temp = await product_controller.getbyPriceGreater(parseFloat(price_display[0]) * 1000)
                }
                else {
                    let take_price = price_display[0].split("-")

                    temp = await product_controller.getbyPriceBetween(parseFloat(take_price[0]) * 1000, parseFloat(take_price[1]) * 1000)

                }
                for (let i = 1; i < price_display.length; i++) {
                    let take_product
                    if (price_display[i] == "3000") {
                        take_product = await product_controller.getbyPriceGreater(parseFloat(price_display[i]) * 1000)
                    }
                    else {
                        let take_price = price_display[i].split("-")
                        take_product = await product_controller.getbyPriceBetween(parseFloat(take_price[0]) * 1000, parseFloat(take_price[1]) * 1000)

                    }
                    temp = union_arrays(temp, take_product)
                }
                products = products.filter(ele1 => temp.some(ele2 => ele1.id == ele2.id))
            }
            
            // Find info for searching nav bar -----------------

            if (category[0] == undefined) {
                for (let i = 0; i < products.length; i++) {
                    if (category_temp[products[i].category] == undefined) {
                        category_temp[products[i].category] = true
                        category.push({ id: products[i].category })
                    }
                }
            }
            if (brand[0] == undefined) {
                for (let i = 0; i < products.length; i++) {
                    if (brand_temp[products[i].brand] == undefined) {
                        brand_temp[products[i].brand] = true
                        brand.push({ id: products[i].brand })
                    }
                }
            }


        }
        
        var size = await size_controller.getAll()
        res.render('Product',
            {
                category_nav: category,
                brand_nav: brand,
                products: products,
                size_stock: size,
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                congrats: congrats,
                gender_display: gender_display,
                type_display: type_display,
                category_display: category_display,
                brand_display: brand_display,
                price_display: price_display,
            })

    }
})

module.exports = router