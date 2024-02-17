// extract module
var express = require('express');

// create server
var app = express();

// set middleware
app.use(express.static(__dirname + '/public'));
app.use(function (request, response) {
    // response
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<img src="/flowerA.jpeg" width="100%" />');
});

// execute server
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
