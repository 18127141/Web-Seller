//Express
var express = require('express')
var app = express()
//Public Fodel
app.use(express.static(__dirname))
//Handlebar
var hbs = require('express-handlebars')
app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials/',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true
    },

}))
//Session
var session = require('express-session')

app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: "user", 
    cookie: { maxAge: 15*60*1000 }}));

//Initial listen Port
app.set('view engine','hbs')
app.set('port',(process.env.PORT|| 5000))


//------------------------------------------------------------------------------------------------
//Home
app.get('/',function(req,res){
    
    res.render('Home',{usercheck: req.session.user})
})
//Find us
app.get('/Find-us',function(req,res){
    res.render('Find_us')
})
//Check order
app.get('/Check-order',function(req,res){
    res.render('Check_order')
})
//Search
var search_route = require('./Routes/Search')
app.use('/Search',search_route)


// user route
var user_route = require('./Routes/User')
app.use('/User',user_route)
// product route
var product_route = require('./Routes/Product')
app.use('/Product',product_route)
// show-product route
var Showproduct_route = require('./Routes/Show_product')
app.use('/Show-product',Showproduct_route)
//initilize cart
var Cart = require('./controllers/cart')
app.use(function(req,res,next){
    var cart = new Cart(req.session.cart ? req.session.cart : {})
    req.session.cart = cart
    next()
})

//Cart route-------
var Cart_route = require('./Routes/Cart')
app.use('/Cart',Cart_route)


app.get('/Mark',function(req,res){
    res.render('Mark')
})

//------------------------------------------------------------------------------------------------
app.listen(app.get('port'),function(){
    console.log("Listening ",+ app.get('port'))
})