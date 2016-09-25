var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/emojify/:input', function(req, res) {
  res.send(req.params);
});

app.listen(3000);
console.log("App listening on port 3000");
