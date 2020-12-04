var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.render('Home')
})
app.use(express.static(__dirname))
var hbs = require('express-handlebars')
app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials/'
}))
app.set('view engine','hbs')
app.set('port',(process.env.PORT|| 5000))
// user route
var user_route = require('./Routes/User')
app.use('/User',user_route)
//
app.listen(app.get('port'),function(){
    console.log("Listening ",+ app.get('port'))
})