// extract module
var express= require('express');

// create server
var app = express();

// declare routers
var routerA = express.Router();
var routerB = express.Router();

// set routerA
routerA.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
});

// set routerB
routerB.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
});

// set routers
app.use('/a', routerA);
app.use('/b', routerB);

// execute servers.
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
