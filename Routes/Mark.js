var express = require('express')
var router = express.Router()
var size_controller = require('../controllers/size')
var product_controller = require('../controllers/product')
router.get('/', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata()
    async function getdata() {
        var mark = []

        for (let i = 0; i < req.session.mark.length; i++) {
            var product = await product_controller.getById(req.session.mark[i].id)
            var oos = false
            if (req.session.mark[i].stock == 0){
                oos = true
            }
            mark.push({
                id: product[0].id,
                name: product[0].name,
                brand: product[0].brand,
                price: product[0].price,
                oos:oos,
                main_img: product[0].main_img,
                info: product[0].info,
            })

        }
        
        res.render('Mark',
            {
                mark: mark,
                cart_total: req.session.cart.length,
                usercheck: req.session.user,
                returnPath: req.originalUrl,
            })
    }
})
router.get("/UpdateMark", function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }

    getdata();
    async function getdata() {
        //default size and quantity

        var size_stock = await size_controller.getById(req.query.id)
        var size = 0
        var stock = 0
        var check = false
        for (let i = 0; i < size_stock.length; i++) {
            if (parseInt(size_stock[i].stock) != 0 && check == false) {
                size = size_stock[i].size
                check = true
            }
            stock += size_stock[i].stock


        }
        // check if the product is already in the mark
        check = false
        for (let i = 0; i < req.session.mark.length; i++) {
            if (req.session.mark[i].id == req.query.id) {
                check = true
                break
            }
        }
        
        if (check == false) {
            req.session.mark.push({
                id: req.query.id,
                stock:stock,
            })
        }

        
        req.session.congrats = "Thêm sản phẩm vào yêu thích thành công!"
        res.redirect(req.query.returnPath)


    }
})
router.get('/DeleteProduct', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }

    var id = req.query.id
    var returnPath = req.query.returnPath
    var submit = req.query.submit
    for (let i = 0; i < req.session.mark.length; i++) {
        if (req.session.mark[i].id == id) {
            req.session.mark.splice(i, 1)
            break
        }
    }
    if (submit == "cart"){
        res.redirect(`/Cart/UpdateCart?id=${id}&returnPath=${returnPath}`)
    }
    res.redirect(returnPath)
})
module.exports = router