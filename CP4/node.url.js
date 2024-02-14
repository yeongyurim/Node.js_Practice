// extract module
var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B425-257160');
console.log(querystring.parse(parsedObject.query));
