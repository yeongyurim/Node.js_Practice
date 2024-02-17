// REpresentational State Transfer ful

// extract module
var fs = require('fs');
var express = require('express');
var bodyParser =require('body-parser');

// make dummy database
var DummyDB = (function () {
    // declare variables
    var DummyDB = {};
    var storage = [];
    var count = 1;

    // fullfill method
    DummyDB.get = function (id) {
        if (id) {
            // process variable
            id = (typeof id == 'string') ? Number(id) : id;

            // select data
            for (var i in storage) if (storage[i].id == id) {
                return storage[i];
            }
        } else {
            return storage;
        }
    };

    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function (id) {
        // process variable
        id = (typeof id == 'string') ? Number(id) : id;

        // remove
        for (var i in storage) if (storage[i].id == id) {
            // delete data
            storage.splice(i, 1);

            // return
            return true;
        }

        return false;
    };

    return DummyDB;
})();

// create Server
var app = express();

// set middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// set router
app.get('/', function (request, response) {
    response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response) { });

app.post('/user', function (request, response) {
    // declare variables
    var name = request.body.name;
    var region = request.body.region;

    // check validation
    if (name && region) {
        response.send(DummyDB.insert({
            name: name,
            region: region
        }));
    } else {
        throw new Error('error');
    }
});

app.put('/user/:id', function (request, response) {
    // declare variable
    var id = request.params.id;
    var name = request.body.name;
    var region = request.body.region;

    // modify database
    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    // response
    response.send(item);
});

app.delete('/user/:id', function (request, response) {
    response.send(DummyDB.remove(requeest.params.id));
});

app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
