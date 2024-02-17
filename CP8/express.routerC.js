// routerA.js
// declare module and variables
var express = require('express');
var router = express.Router();

// page route
router.get('/index', function (request, response) {
    response.send('<h1>Index Page C</h1>');
});

// export router
exports.router = router
