// extract module
var express = require('express');

// create Server
var app = express();

// set request event listener
app.get('/page/:id', function (request, response) {
    // declare variable
    var name = request.params.id;

    // response
    response.send('<h1>' + name + ' Page</h1>');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
});
