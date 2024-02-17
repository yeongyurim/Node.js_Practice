// extract module
var express = require('express');
var session = require('express-session');

// create Server
var app = express();

// set request event listener
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}));

app.use(function (request, response) {
    // save session
    request.session.now = (new Date()).toUTCString();

    // response
    response.send(request.session);
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
});
