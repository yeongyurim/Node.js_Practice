// index.js
// extract module
var express = require('express');

// create servers
var app = express();
app.use('/a', require("./express.routerA").router);
app.use('/b', require("./express.routerB").router);
app.use('/c', require("./express.routerC").router);

// execute server
app.listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});
