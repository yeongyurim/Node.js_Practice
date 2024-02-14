// extract module
var fs = require('fs');
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
  if (request.method == 'GET') {
    // get Request
    fs.
    console.log('GET 요청입니다.');
  } else if (request.method == 'POST') {
    console.log('POST 요청입니다.');
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
