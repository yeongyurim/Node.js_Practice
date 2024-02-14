// extract module
var http = require('http');

// create web server and execute it
http.createServer(function(request, response) {
  // declare variable
  var date = new Date();
  date.setDate(date.getDate() + 7);

  response.writeHead(200, {
    'Content-Type' : 'text/html',
    'Set-Cookie': ['breakfast = toast;Expires = ' + date.toUTCString(),
    'dinner = chicken']
  });

  response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
