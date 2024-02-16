// extract module
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Test - File - 2</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
