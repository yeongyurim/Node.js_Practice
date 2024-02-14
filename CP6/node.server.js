// extract module
var server = require('http').createServer(function (request, response) {
  // response
  response.writeHead(200, { 'Content-Type' : 'text/html'});
  response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// add event on Server
server.on('request', function (code) {
  console.log('Request On');
});

server.on('connection', function (code) {
  console.log('Connection On');
});

server.on('close', function (code) {
  console.log('Close On');
});

// after 10 sec execute the function
var test = function() {
  // closing Server.
  server.close();
};
// setTimeout(test, 10000);
