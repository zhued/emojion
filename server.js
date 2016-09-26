var express = require('express');
var morgan = require('morgan');
var emoji = require('node-emoji');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/emojify/:input', function(req, res) {
  var input = req.params.input;
  var emojiText = emoji.get(input);
  res.send(emojiText);
});

app.listen(3000);
console.log("App listening on port 3000");
