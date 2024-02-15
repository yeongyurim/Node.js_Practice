// extract nod
var http = require('http');

// use module
http.createServer(function (request, response) {
    // check Cookie
    if (request.headers.cookie) {
        // extract Cookies and decompose it
        var cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1]
            };
        });

        // response
        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    } else {
        // SET cookie
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['name = RintIanTta', 'region = Seoul']
        });

        // response
        response.end('<h1>쿠키를 생성했습니다</h1>');
    }
}).listen(52273, function () {
    console.log('Server Running at http:/127.0.0.1:52273');
});
