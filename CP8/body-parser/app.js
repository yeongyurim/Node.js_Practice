// extract module
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// create Server
var app = express();

// set middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// set request event listener
app.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});

app.get('/login', function (request, response) {
    fs.readFile('login.html', function (e, d) {
        response.send(d.toString());
    });
});

app.post('/login', function (request, response) {
    // create cookies
    var login = request.body.login;
    var password = request.body.password;

    // print
    console.log(login, password);
    console.log(request.body);

    // check logined
    if ( login == 'rint' && password == '1234') {
        // success logined
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        // failed to login
        response.redirect('/login');
    }
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
});
