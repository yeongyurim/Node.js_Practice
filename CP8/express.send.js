// extract module
var express = require('express');

// create server
var app = express();

// add event listner on request
app.use(function (request, response) {
    // create data
    var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }

    // response
    response.send(output);
});

// start server
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
