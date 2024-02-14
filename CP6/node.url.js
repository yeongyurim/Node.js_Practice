// extract module
var fs = require('fs');
var http = require('http');
var url = require('url');

// create web server and execute it
http.createServer(function(request, response) {
  // declare variables
  var pathname = url.parse(request.url).pathname;

  if (pathname == '/') {
    // read Index.html
    fs.readFile('index.html', function (error, data) {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);
    });
  } else if (pathname == '/OtherPage') {
    // read OtherPage.html
    fs.readFile('OtherPage.html', function (error, data) {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);
    });
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
