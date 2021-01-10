var express = require('express')
var router = express.Router()
var product_controller = require('../controllers/product')
var size_controller = require('../controllers/size')
var img_controller = require('../controllers/img_src')
var user_controller = require('../controllers/user')
var models = require('../models')
var voucher_detail_controller = require('../controllers/voucher_detail')
var order_detail_controller = require('../controllers/order_detail')
var order_controller = require('../controllers/order')
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
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
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
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
//delete Product
router.get('/DeleteProduct', function (req, res) {
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {

            models.comments.destroy({
                where: { ProductId: req.query.Enter_id }
            })
            models.order_detail.destroy({
                where: { ProductId: req.query.Enter_id }
            })
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
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
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
//Manage User
router.get("/ManageUser", function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {
        var users = await user_controller.getAll()

        var congrats = req.session.congrats

        req.session.congrats = undefined
        //seach
        if (req.query.search != undefined) {
            users = await user_controller.searchByEverything(req.query.search)
        }
        var admin = []
        var regular = []
        if (users[0] != undefined) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].isAdmin) {
                    admin.push(users[i])
                }
                else {
                    regular.push(users[i])
                }
            }
        }
        if (req.query.admin == "true") {
            users = admin
        }
        else if (req.query.admin == "false") {
            users = regular
        }
        if (req.session.user != undefined) {
            if (req.session.user.isAdmin == true) {
                res.render('admin-manageUser',
                    {
                        layout: 'Admin',
                        users: users,
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
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {

        var user = await user_controller.checkUserName(req.query.id)
        var orders = await order_controller.getByUserId(req.query.id)

        res.render("admin-UserProfileView.hbs",
            {
                layout: 'Admin',
                user: user[0],
                cart_total: req.session.cart.length,
                usercheck: req.session.user,
                orders: orders,
            })
    }
})
router.get("/DeleteUser", function (req, res) {
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            getdata();
            async function getdata() {
                //delete order_detail
                var order = await order_controller.getByUserId(req.query.Enter_id)
                for (let i = 0; i < order.length; i++) {
                    models.order_detail.destroy({
                        where: { orderId: order[i].id }
                    })
                }
                //delete voucher_detail
                var voucher = await voucher_detail_controller.getByUserId(req.session.user.id)
                for (let i = 0; i < voucher.length; i++) {
                    models.voucher_detail.destroy({
                        where: { voucherId: voucher[i].id }
                    })
                }
                //delete comment
                models.comments.destroy({
                    where: { UserId: req.query.Enter_id }
                })
                //delete order
                models.order.destroy({
                    where: { UserId: req.query.Enter_id }
                })
                //delete
                models.User.destroy({
                    where: { id: req.query.Enter_id }
                })
                req.session.congrats = "Xóa người dùng thành công"
                res.redirect('/User/Admin/ManageUser')
            }
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})
router.get("/voucher", function (req, res) {
    res.render('admin-voucher', { layout: "Admin" })
})
router.get("/add-voucher", function (req, res) {
    res.render('admin-addAddVoucher', { layout: "Admin" })
})
router.get("/send-voucher", function (req, res) {
    res.render('admin-sendVoucher', { layout: "Admin" })
})
// order -------------------------------------------
router.get("/check-order", function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    getdata();
    async function getdata() {
        var orders = await order_controller.getAll()
        var finish = []
        var unfinish = []
        if (orders[0] != undefined) {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].status == "Check" || orders[i].status == "Shipping") {
                    unfinish.push(orders[i])
                }
                else {
                    finish.push(orders[i])
                }
            }
        }
        if (req.query.finish == "true") {
            orders = finish
        }
        else if (req.query.finish == "false") {
            orders = unfinish
        }
        res.render('admin-checkorder', {
            layout: 'Admin',
            cart_total: req.session.cart.length,
            usercheck: req.session.user,
            orders: orders
        })
    }
})
router.get('/Show-order/:id', function (req, res) {
    req.session.congrats = undefined
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {

        var order = await order_controller.getById(req.params.id)
        var products = await order_detail_controller.getByOrderId(req.params.id)
        var product = []

        for (let i = 0; i < products.length; i++) {
            var temp = await product_controller.getById(products[i].ProductId)
            product.push({
                id: temp[0].id,
                name: temp[0].name,
                size: products[i].size,
                quantity: products[i].quantity,
            })
        }

        res.render('admin-showorder',
            {

                order: order[0],
                product: product,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                returnPath: req.originalUrl,
            })
    }
})
router.get("/ChangeStatus", function (req, res) {
    getdata()
    async function getdata() {

        var order = await order_controller.getById(req.query.order)
        if (order[0] != undefined) {
            if (order[0].status == "Check") {
                models.order.update({
                    status: "Shipping"
                }, {
                    where: { id: req.query.order }
                })
            }
            else {
                models.order.update({
                    status: "Finish"
                }, {
                    where: { id: req.query.order }
                })
            }
        }
        res.redirect(`/User/Admin/Show-order/${req.query.order}`)
    }
})
module.exports = router

