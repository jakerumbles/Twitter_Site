var express = require('express');
var app = express();

//SETUP
app.use(express.static('public'));
app.set('view engine', 'ejs');

//ROUTE(s)
app.get('/', function (req, res) {
    res.render('index');
});

//Server
app.listen(3000, function() {
  console.log('Node server has started');
});
