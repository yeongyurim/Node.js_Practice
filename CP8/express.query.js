// extract module
var express = require('express');

// create Server
var app = express();

// set middleware
app.use(function (request, response) {
    // declare variables
    var name = request.query.name;
    var region = request.query.region;

    // response
    response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
