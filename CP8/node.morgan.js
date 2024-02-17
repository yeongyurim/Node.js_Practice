// extract module
var express = require('express');
var morgan = require('morgan');

// create server
var app = express();

// set middleware
app.use(morgan('combined'));
app.use(function (request, response) {
    response.send('<h1>express Basic</h1>');
});

// execute server
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
