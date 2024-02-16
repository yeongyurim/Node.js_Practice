// extract module
var http = require('http');
var fs = require('fs');

// create web server and execute it
http.createServer(function(request, response) {
    if (request.url == '/') {
        // read File
        fs.readFile('HTMLPage.html', function(e, d) {
            response.writeHead(200, { 'Content-Type' : 'text/html' });
            response.end(d);
        })
    }
    else {
        error.error.error();
    }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
