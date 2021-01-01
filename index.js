//Express
var express = require('express')
var app = express()
//Public Fodel
app.use(express.static(__dirname))
//Handlebar
var hbs = require('express-handlebars')
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },

}))
//Session
var session = require('express-session')

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "user",
    cookie: { maxAge: 40 * 60 * 1000 }
}));

//Initial listen Port
app.set('view engine', 'hbs')
app.set('port', (process.env.PORT || 5000))


//------------------------------------------------------------------------------------------------
var product_controller = require('./controllers/product')
var size_controller = require('./controllers/size')
//Home
app.get('/', function (req, res) {
    //initiate cart and favorites
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata();
    async function getdata() {
        var products

        if (req.query.type == undefined || parseInt(req.query.type) == 0) {
            products = await product_controller.getAll()
        }
        else {
            products = await product_controller.getByType(parseInt(req.query.type))
        }
        var count = 0
        var temp = []

        if (products.length > 6) {
            while (count != 6) {
                var random_index = Math.floor(Math.random() * products.length)

                if (temp.find(ele => ele.id == products[random_index].id) == undefined) {
                    temp.push(products[random_index])
                    count++
                }
            }
            products = temp
        }
        for (let i = 0; i < products.length; i++) {
            var size_stock = await size_controller.getById(products[i].id)
            var total_product = 0
            for (let j = 0; j < size_stock.length; j++) {
                total_product += size_stock[j].stock
            }
            products[i].stock = total_product
        }
        res.render('Home',
            {
                returnPath: req.originalUrl,
                usercheck: req.session.user,
                cart_total: req.session.cart.length,
                products: products,
            })
    }
})
//Best product
app.get("/BestProduct", function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    getdata();
    async function getdata() {
        var products

        if (req.query.type == undefined || parseInt(req.query.type) == 0) {
            products = await product_controller.getAll()
        }
        else {
            products = await product_controller.getByType(parseInt(req.query.type))
        }
        var count = 0
        var temp = []

        if (products.length > 6) {
            while (count != 6) {
                var random_index = Math.floor(Math.random() * products.length)

                if (temp.find(ele => ele.id == products[random_index].id) == undefined) {
                    temp.push(products[random_index])
                    count++
                }
            }
            products = temp
        }
        for (let i = 0; i < products.length; i++) {
            var size_stock = await size_controller.getById(products[i].id)
            var total_product = 0
            for (let j = 0; j < size_stock.length; j++) {
                total_product += size_stock[j].stock
            }
            products[i].stock = total_product
        }
        res.json(products)
    }
})

//Find us
app.get('/Find-us', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    res.render('Find_us', { usercheck: req.session.user, cart_total: req.session.cart.length })
})
//Check order
app.get('/Check-order', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = []
    }
    if (req.session.mark == undefined) {
        req.session.mark = []
    }
    res.render('Check_order', { usercheck: req.session.user, cart_total: req.session.cart.length })
})
//Search
var search_route = require('./Routes/Search')
app.use('/Search', search_route)


// user route
var user_route = require('./Routes/User')
app.use('/User', user_route)
// product route
var product_route = require('./Routes/Product')
app.use('/Product', product_route)
// show-product route
var Showproduct_route = require('./Routes/Show_product')
app.use('/Show-product', Showproduct_route)

//Cart route-------
var Cart_route = require('./Routes/Cart')
app.use('/Cart', Cart_route)

//Mart route-------
var Mark_route = require('./Routes/Mark')
app.use('/Mark', Mark_route)

//
// var bcrypt = require('bcrypt')
// bcrypt.genSalt(10,function(err,salt){
//     bcrypt.hash("tlong123",salt,function(err,hash){
//         console.log(hash)
//         bcrypt.compare("tlong123",hash,function(err,res){
//             console.log(res)
//         })
//     })
// })


//------------------------------------------------------------------------------------------------
app.listen(app.get('port'), function () {
    console.log("Listening ", + app.get('port'))
})