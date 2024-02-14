// extract module
var fs = require('fs');
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
  // read HTML file
  fs.readFile('picture.jpg', function (error, data) {
    response.writeHead(200, { 'Content-Type' : 'image/jpeg' });
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
