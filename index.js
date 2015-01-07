
var path = require('path');
var express = require('express');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('page_login', { page: 'login' });
});

app.listen(3100, function(){
  console.log('http://localhost:3100/');
});
