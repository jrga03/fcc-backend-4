var express = require('express')
var app = express()
app.set('views', process.argv[3]) // original code "app.set('views', process.argv[3]||path.join(__dirname, 'templates'))", adjusted for cleanliness
app.set('view engine', 'jade')
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(Number(process.argv[2]))