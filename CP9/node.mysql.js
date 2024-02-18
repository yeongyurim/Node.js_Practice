// extract module
var mysql = require('mysql');

// connect with database
var client = mysql.createConnection({
    user: 'root',
    password: 'yeon1234',
    database: 'Company'
});

client.query('SELECT * FROM products', function(e, result, fields) {
    if (e) {
        console.log("there was an error occurred");
    }
    else {
        console.log(result);
    }
});

client.qurey('INSERT INTO products (name, modelnumber, series) VALUES (?,?,?)',
['Name Value','Model Number Value','Series Value'],
function (e, r, f) {
    
});
