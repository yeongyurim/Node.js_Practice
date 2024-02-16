// extract module
var express = require('express');

// create Server
var app = express();

// set middleware - 1
app.use(function (request, response, next) {
    console.log("first middleware");
    request.number = 52;
    response.number = 273;
    next();
});

// set middleware - 2
app.use(function (request, response, next) {
    console.log("second middleware");
    next();
});

// set middleware - 3
app.use(function (request, response, next) {
    console.log("third middleware");

    // response
    response.writeHead(200, { 'Content-Type' : 'text/html' });
    response.end('<h1>express Basic' + request.number + response.number +'</h1>');
});

// execute Server
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1');
});
