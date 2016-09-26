var express = require('express'),
    morgan = require('morgan'),
    routes = require('./routes.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

routes(app);

app.listen(3000);
console.log("App listening on port 3000");

module.exports = app;
