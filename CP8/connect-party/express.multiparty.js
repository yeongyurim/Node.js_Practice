// extract module
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

// create Server
var app = express();

// set request event listener
app.use(multipart({ uploadDir: __dirname + '/multipart' }));

// set router
app.get('/', function (request, response) {
    fs.readFile('HTMLPage.html', function (e, d) {
        response.send(d.toString());
    });
});

app.post('/', function (request, response) {
    // declare variables
    var comment = request.body.comment;
    var imageFile = request.files.image;

    if (imageFile && imageFile.size > 0) {
        // declare varialbe
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        // check image file
        if (type.indexOf('image') != -1) {
            // if image file : change the file name
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (e) {
                response.redirect('/');
            });
        } else {
            // if not image file : delete files
            fs.unlink(path, function (e) {
                response.sendStatus(400);
            });
        }
    } else {
        // no files
        response.sendStatus(404);
    }
    console.log(request.body);
    console.log(request.files);

    response.redirect('/');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
});
