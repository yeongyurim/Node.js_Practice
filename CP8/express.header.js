// extract module
var express = require('express');

// create Server
var app = express();

// set middleware
app.use(function (request, response) {
    // extract User-Agent attribute
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);
    // response
    // when we send just status code we use sendStatus() method
    response.sendStatus(200);
});

app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
