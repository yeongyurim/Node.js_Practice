// extract module
var http = require('http');
var url = require('url');

// create web server and execute it
http.createServer(function (request, response) {
  // extract arguments
  var query = url.parse(request.url, true).query;

  // print get's arguements
  response.writeHead(200, { 'Content-Type' : 'text/html' });
  response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
