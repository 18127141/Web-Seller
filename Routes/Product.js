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
        var products = []
        var gender_display
        var type_display = [], category_display = [], brand_display = [], price_display = []
        if (req.query.search != undefined) {
            products = await product_controller.searchByNameAndId(req.query.search)
        }
        //gender
        if (req.query.Gender != undefined) {
            if (req.query.Gender == "Male,Female") {
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
        }
        else {
            gender_display = "All"
        }
        //Product type
        if (req.query.Type != undefined) {
            type_display = req.query.Type.split(",")

        }

        //Category
        if (req.query.Category != undefined) {
            category_display = req.query.Category.split(",")
        }
        //Brand
        if (req.query.Brand != undefined) {
            brand_display = req.query.Brand.split(",")
        }
        //Price
        if (req.query.Price != undefined) {
            price_display = req.query.Price.split(",")
        }
        var size = await size_controller.getAll()
        // Find info for searching nav bar -----------------
        var category = []
        var category_temp = {}
        var brand = []
        var brand_temp = {}
        var price = []
        var price_temp = {}
        for (let i = 0; i < products.length; i++) {
            if (category_temp[products[i].category] == undefined) {
                category_temp[products[i].category] = true
                category.push({id: products[i].category})
            }
            if (brand_temp[products[i].brand] == undefined) {
                brand_temp[products[i].brand] = true
                brand.push({id: products[i].brand})
            }
            if (price_temp[`${products[i].price}`] == undefined) {
                price_temp[`${products[i].price}`] = true
                price.push({id: products[i].price})
            }
        }
        
        res.render('Product',
            {
                category_nav:category,
                brand_nav:brand,
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