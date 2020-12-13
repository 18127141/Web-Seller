var express = require('express')
var app = express()


app.use(express.static(__dirname))


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
app.set('view engine','hbs')
app.set('port',(process.env.PORT|| 5000))
//Home
app.get('/',function(req,res){
    res.render('Home')
})
//sync
var models = require("./models")
app.get("/sync",function(req,res){
    models.sequelize.sync().then(function(){
        res.send("Complete")
    })
})
//Find us
app.get('/Find-us',function(req,res){
    res.render('Find_us')
})
//
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
var product_route = require('./Routes/Show_product')
app.use('/Show-product',product_route)
app.listen(app.get('port'),function(){
    console.log("Listening ",+ app.get('port'))
})