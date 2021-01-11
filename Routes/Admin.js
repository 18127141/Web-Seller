var express = require('express')
var router = express.Router()
var product_controller = require('../controllers/product')
var size_controller = require('../controllers/size')
var img_controller = require('../controllers/img_src')
var user_controller = require('../controllers/user')
var models = require('../models')
var voucher_controller = require('../controllers/voucher')
var voucher_detail_controller = require('../controllers/voucher_detail')
var order_detail_controller = require('../controllers/order_detail')
var order_controller = require('../controllers/order')
var bodyParser = require('body-parser')
const { compareSync } = require('bcrypt')
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
router.get('/Promote', function (req, res) {
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            models.User.update({
                isAdmin: true
            }, { where: { id: req.query.Enter_id } })
            res.redirect('/User/Admin/ManageUser')
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})
router.get("/voucher", function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            //
            getdata();
            async function getdata() {
                var voucher_info = await voucher_controller.getAll()
                var voucher = []
                var available = []
                var unavailable = []
                if (voucher_info[0] != undefined) {
                    for (let i = 0; i < voucher_info.length; i++) {
                        var today = new Date();
                        var status
                        var startDay = new Date(voucher_info[i].startDay);
                        var expireDay = new Date(voucher_info[i].expireDay)
                        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                        today = new Date(date)

                        if ((today.getTime() - startDay.getTime()) < 0) {
                            status = "Chưa dùng được"
                            unavailable.push(
                                {
                                    id: voucher_info[i].id,
                                    startDay: voucher_info[i].startDay,
                                    expireDay: voucher_info[i].expireDay,
                                    value: voucher_info[i].value,
                                    status: status
                                }
                            )
                        }
                        else if ((today.getTime() - expireDay.getTime()) > 0) {
                            status = "Quá hạn sử dụng"
                            unavailable.push(
                                {
                                    id: voucher_info[i].id,
                                    startDay: voucher_info[i].startDay,
                                    expireDay: voucher_info[i].expireDay,
                                    value: voucher_info[i].value,
                                    status: status
                                }
                            )
                        }
                        else {
                            status = "Có thể dùng"
                            available.push(
                                {
                                    id: voucher_info[i].id,
                                    startDay: voucher_info[i].startDay,
                                    expireDay: voucher_info[i].expireDay,
                                    value: voucher_info[i].value,
                                    status: status
                                }
                            )
                        }
                        voucher.push(
                            {
                                id: voucher_info[i].id,
                                startDay: voucher_info[i].startDay,
                                expireDay: voucher_info[i].expireDay,
                                value: voucher_info[i].value,
                                status: status
                            }
                        )

                    }
                }

                if (req.query.available == "true") {
                    voucher = available
                }
                else if (req.query.available == "false") {
                    voucher = unavailable
                }
                var error
                if (req.session.error != undefined) {
                    error = req.session.error
                    req.session.error = undefined
                }
                res.render('admin-voucher', {
                    layout: "Admin",
                    voucher: voucher,
                    cart_total: req.session.cart.length,
                    usercheck: req.session.user,
                    error: error,
                })
            }
            //

        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})
router.get("/AddVoucher", function (req, res) {
    getdata();
    async function getdata() {
        var voucher_id = req.query.id.split("")
        if (voucher_id[0] != "#") {
            voucher_id = "#" + req.query.id
        }
        else {
            voucher_id = req.query.id
        }
        var voucher = await voucher_controller.getById(voucher_id)

        if (voucher[0] != undefined) {
            req.session.error = "Voucher đã tồn tại"

        }
        else {
            var startDay = new Date(req.query.startDay);
            var expireDay = new Date(req.query.expireDay)
            if (expireDay.getTime() - startDay.getTime() < 0) {
                req.session.error = "Ngày bắt đầu và kết thúc không hợp lệ"

            }
            else {
                models.voucher.create({
                    id: voucher_id,
                    startDay: req.query.startDay,
                    expireDay: req.query.expireDay,
                    value: parseFloat(req.query.value)

                })
            }
        }

        res.redirect("/User/Admin/voucher")
    }
})
router.get("/deleteVoucher", function (req, res) {
    var voucher_id = '#' + req.query.id
    models.voucher_detail.destroy({
        where: { voucherId: voucher_id }
    })
    models.voucher.destroy({
        where: { id: voucher_id }
    })
    res.redirect("/User/Admin/voucher")
})
router.get("/send-voucher", function (req, res) {
    if (req.session.user == undefined) {
        res.redirect('/')
    }
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.user != undefined) {
        if (req.session.user.isAdmin == true) {
            getdata();
            async function getdata() {
                var voucher = await voucher_controller.getById('#' + req.query.id)
                var vouchers = await voucher_detail_controller.getByvoucherId('#' + req.query.id)
                var users = await user_controller.getAll()
                var unvoucher_user = []
                var voucher_user = []

                for (let i = 0; i < vouchers.length; i++) {
                    var temp = await user_controller.checkUserName(vouchers[i].UserId)

                    voucher_user.push({
                        id: temp[0].id,
                        phone: temp[0].phone,
                        email: temp[0].email,
                        number: vouchers[i].number
                    })
                }
                for (let i = 0; i < users.length; i++) {
                    if (voucher_user.find(
                        (ele) => {
                            return ele.id == users[i].id
                        }) == undefined) {
                        unvoucher_user.push(
                            {
                                id: users[i].id,
                                phone: users[i].phone,
                                email: users[i].email,
                                name: users[i].name
                            }
                        )
                    }
                }

                res.render('admin-sendVoucher', {
                    layout: "Admin",
                    voucher: voucher[0],
                    voucher_user: voucher_user,
                    unvoucher_user: unvoucher_user,
                    voucher_id: req.query.id,
                    cart_total: req.session.cart.length,
                    usercheck: req.session.user,
                })
            }
        }
        else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
})
router.get("/DeleteUserVoucher", function (req, res) {
    if (req.query.id != undefined) {
        models.voucher_detail.destroy({
            where: {
                voucherId: '#' + req.query.voucher,
                UserId: req.query.id
            }
        })
    } else {
        models.voucher_detail.destroy({
            where: {
                voucherId: '#' + req.query.voucher,
            }
        })
    }
    res.redirect(`/User/Admin/send-voucher?id=${req.query.voucher}`)
})
router.get("/AddUserVoucher", function (req, res) {
    console.log("Hi")
    models.voucher_detail.create({
        number: 1,
        UserId: req.query.id,
        voucherId: '#' + req.query.voucher
    })

    res.redirect(`/User/Admin/send-voucher?id=${req.query.voucher}`)
})
router.get("/UpdateQuantityVoucher", function (req, res) {
    var temp = []
    models.voucher_detail.update({
        number: parseInt(req.query.quantity)
    }, {
        where: {
            voucherId: '#' + req.query.voucher,
            UserId: req.query.id
        }
    })
    res.json(temp)
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

