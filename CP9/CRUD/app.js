// extract modules
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// connect with database
var client = mysql.createConnection({
    user: 'root',
    password: 'yeon1234',
    database: 'Company'
});

// create Server
var app = express();
app.use(bodyParser.urlencoded({
    extened: false
}));

// execute Server
app.listen(52273, function() {
    console.log('server is running at http://127.0.0.1:52273');
});

// setting router
app.get('/', function (req,res) {
    fs.readFile('list.html', 'utf8', function(e, d) {
        // operate database query
        client.query('SELECT * FROM products', function (e, r) {
            // response
            res.send(ejs.render(d, {
                data: r
            }));
        });
    });
});

app.get('/delete/:id', function (req,res) {
    // operate database query
    client.query('DELETE FROM products WHERE id=?', [req.params.id], function () {
        // response
        res.redirect('/');
    });
});

app.get('/insert', function (req,res) {
    // read file
    fs.readFile('insert.html', 'utf8', function (e, d) {
        // response
        res.send(d);
    });
});

app.post('/insert', function (req,res) {
    // declare variable
    var body = req.body;

    // opearte database query
    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?,?,?)',[
        body.name, body.modelnumber, body.series
    ], function () {
        // response
        res.redirect('/');
    });
});

app.get('/edit/:id', function (req,res) {
    // read file
    fs.readFile('edit.html', 'utf8', function (e, d) {
        // operate database query
        client.query('SELECT * FROM products WHERE id = ?',[
            req.params.id
        ], function (e, r) {
            // response
            res.send(ejs.render(d, {
                data: r[0]
            }));
        });
    });
});

app.post('/edit/:id', function (req,res) {
    // declare variable
    var body = req.body;

    // operate database query
    client.query('UPDATE products SET name = ?, modelnumber = ?, series = ? WHERE id = ?',[
        body.name, body.modelnumber, body.series, req.params.id
    ], function (e, r) {
        // response
        res.redirect('/');
    });
});
