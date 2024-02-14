// extract module
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
  response.writeHead(302, { 'Location' : 'https://www.naver.com' }); // first argument is status code
  response.end();
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
