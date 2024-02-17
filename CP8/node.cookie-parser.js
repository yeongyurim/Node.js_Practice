// extract module
var express = require('express');
var cookieParser = require('cookie-parser');

// create Server
var app = express();

// set middleware
app.use(cookieParser());

// set request event listener
app.get('/getCookie', function (request, response) {
    // response.
    response.send(request.cookies);
});

app.get('/setCookie', function (request, response) {
    // create cookie
    response.cookie('string', 'cookie', { maxAge: 6000, secure: true});
    response.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    // response
    response.redirect('/getCookie');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
});
