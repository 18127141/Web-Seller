var express = require('express')
var router = express.Router()
var product_controller = require('../controllers/product')
var size_controller = require('../controllers/size')
var img_controller = require('../controllers/img_src')
var user_controller = require('../controllers/user')
var models = require('../models')
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
    getdata();
    async function getdata() {
        var products = await product_controller.getAll()
        var congrats = req.session.congrats
        req.session.congrats = undefined
        if (req.query.search != undefined) {
            products = await product_controller.searchByNameAndId(req.query.search)
        }
        var sizes = await size_controller.getAll()

        if (req.session.user != undefined) {
            if (req.session.user.isAdmin == true) {
                res.render('admin-changeProduct',
                    {
                        layout: 'Admin',
                        user: req.session.user,
                        usercheck: req.session.user,
                        products: products,
                        size_stock: sizes,
                        returnPath: req.originalUrl,
                        congrats: congrats,
                        cart_total: req.session.cart.length
                    })
            }
            else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    }
})
router.get('/UpdateProduct', function (req, res) {
    getdata();
    async function getdata() {
        var products = await product_controller.getById(req.query.Enter_id)
        var sizes = await size_controller.getById(req.query.Enter_id)
        var img = await img_controller.getById(req.query.Enter_id)

        //
        if (req.session.user != undefined) {
            if (req.session.user.isAdmin == true) {
                if (products[0] == undefined) {
                    products = {
                        id: req.query.Enter_id
                    }
                    sizes = {
                    }
                    img = {
                    }
                    res.render('admin-updateProduct',
                        {
                            layout: 'Admin',
                            product: products,
                            size_stock: sizes,
                            img: img,
                            usercheck: req.session.user,
                            returnPath: req.query.returnPath,
                            cart_total: req.session.cart.length
                        })
                }
                else if (req.query.NoWarning == undefined) {
                    res.render('admin-updateProduct',
                        {
                            layout: 'Admin',
                            existed_product: true,
                            product: products[0],
                            size_stock: sizes,
                            img: img,
                            usercheck: req.session.user,
                            returnPath: req.query.returnPath,
                            warning: "Sản phẩm đã tồn tại, bạn vẫn có thể chỉnh sửa!",
                            cart_total: req.session.cart.length
                        })
                }
                else {
                    res.render('admin-updateProduct',
                        {
                            layout: 'Admin',
                            existed_product: true,
                            product: products[0],
                            size_stock: sizes,
                            img: img,
                            usercheck: req.session.user,
                            returnPath: req.query.returnPath,
                            cart_total: req.session.cart.length
                        })
                }
            }
            else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    }
})
router.post('/UpdatedProduct', function (req, res) {
    var id = req.body.id
    var name = req.body.name
    var type = req.body.type
    var info = req.body.info
    var category = req.body.category
    var male = req.body.male
    var female = req.body.female
    var brand = req.body.brand
    var price = parseFloat(req.body.price)
    //size_stock

    var size = req.body.size
    var stock = req.body.stock
    if (Array.isArray(size) == false) {
        var temp = size
        size = []
        size.push(temp)
        temp = stock
        stock = []
        stock.push(temp)
    }
    var img = req.body.img

    if (male == "Male") {
        if (female == "Female") {
            gender = "Unisex"
        } else {
            gender = "Male"
        }
    } else if (female == "Female") {
        gender = "Female"
    }
    else {
        gender = "Unisex"
    }
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    else if (req.session.user.isAdmin == false) {
        res.redirect('/')
    }

    getdata()
    async function getdata() {
        var checked = await product_controller.getById(id)


        if (checked[0] == undefined) {
            models.Product.create({
                id: id,
                type: type,
                category: category,
                name: name,
                brand: brand,
                info: info,
                price: price,
                main_img: img[0],
                gender: gender,
            })
            for (let i = 0; i < img.length; i++) {
                models.img_src.create({
                    ProductId: id,
                    img_src: img[i],
                })
            }
            for (let i = 0; i < size.length; i++) {
                models.size_stock.create({
                    ProductId: id,
                    size: size[i],
                    stock: stock[i],
                })
            }
            req.session.congrats = "Thêm sản phẩm thành công"
            res.redirect(req.body.returnPath)
        } else {
            models.Product.update({
                type: type,
                category: category,
                name: name,
                brand: brand,
                info: info,
                price: price,
                main_img: img[0],
                gender: gender,
            }, {
                where: { id: id }
            })
            //img
            models.img_src.destroy({
                where: { ProductId: id }
            })
            for (let i = 0; i < img.length; i++) {
                models.img_src.create({
                    ProductId: id,
                    img_src: img[i],
                })
            }
            // size
            models.size_stock.destroy({
                where: { ProductId: id }
            })
            for (let i = 0; i < size.length; i++) {
                models.size_stock.create({
                    ProductId: id,
                    size: size[i],
                    stock: stock[i],
                })
            }
            req.session.congrats = "Sửa sản phẩm thành công"
            res.redirect(req.body.returnPath)
        }
    }
})
router.get('/DeleteProduct', function (req, res) {
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {

            models.img_src.destroy({
                where: { ProductId: req.query.Enter_id }
            })
            models.size_stock.destroy({
                where: { ProductId: req.query.Enter_id }
            })
            models.Product.destroy({
                where: { id: req.query.Enter_id }
            })
            req.session.congrats = "Xóa sản phẩm thành công"
            res.redirect(req.query.returnPath)
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }

})
router.get('/OutofStock', function (req, res) {
    getdata();
    async function getdata() {
        var products = await product_controller.getAll()
        if (req.query.search != undefined) {
            products = await product_controller.searchByNameAndId(req.query.search)
        }
        var products_oos = [];

        for (let i = 0; i < products.length; i++) {
            var sizes = await size_controller.getById(products[i].id)

            var stock_check = false
            for (let j = 0; j < sizes.length; j++) {
                if (parseInt(sizes[j].stock) != 0) {

                    stock_check = true
                    break
                }
            }
            if (stock_check == false) {
                products_oos.push(products[i])
            }
        }

        var congrats = req.session.congrats
        req.session.congrats = undefined

        if (req.session.user != undefined) {
            if (req.session.user.isAdmin == true) {
                res.render('admin-outOfStock',
                    {
                        layout: 'Admin',
                        user: req.session.user,
                        usercheck: req.session.user,
                        products: products_oos,
                        returnPath: req.originalUrl,
                        congrats: congrats,
                        cart_total: req.session.cart.length
                    })
            }
            else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    }
})
router.get("/ManageUser", function (req, res) {
    getdata();
    async function getdata() {
        var users = await user_controller.getAll()
        var congrats = req.session.congrats
        req.session.congrats = undefined
        if (req.query.search != undefined) {
            products = await product_controller.searchByNameAndId(req.query.search)
        }
        var sizes = await size_controller.getAll()

        if (req.session.user != undefined) {
            if (req.session.user.isAdmin == true) {
                res.render('admin-manageUser',
                    {
                        layout: 'Admin',
                        user: req.session.user,
                        usercheck: req.session.user,
                        returnPath: req.originalUrl,
                        congrats: congrats,
                        cart_total: req.session.cart.length
                    })
            }
            else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    }
})

router.get("/ProfileUser", function (req, res) {
    res.render("admin-UserProfileView.hbs",{ layout: 'Admin'})
})
module.exports = router

