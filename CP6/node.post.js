// extract module
var fs = require('fs');
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
  if (request.method == 'GET') {
    // get Request
    fs.readFile('HTMLPage.2.html', function (error, data) {
      response.writeHead(200 , {'Content-Type': 'text/html'});
      response.end(data);
    });
  } else if (request.method == 'POST') {
    // post request
    request.on('data', function (data) {
      response.writeHead(200 , { 'Content-Type': 'text/html'});
      response.end('<h1>' + data + '</h1>');
    });
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
