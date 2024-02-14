// extract file system
var fs = require('fs');

try {
  // use module
  var text = fs.readFileSync('textfile.txt', 'utf8');
  console.log(text);
} catch (e) {
  console.log(e);
}

try {
  // decalre variable
  var data = 'Hello World ...!';
  fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
  console.log('WRITE FILE SYNC COMPLETE');
} catch (e) {
  console.log(e);
}

// if read the file successfully send data to call back function's second argument
fs.readFile('textfile.txt', 'utf8', function(error, data) {
  if (error) {
      console.log(error);
  }
  else {
      console.log(data);
  }
});

// use module
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('WRITE FILE ASYNC COMPLETE');
  }
});
