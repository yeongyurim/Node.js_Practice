// there can be at most 10 events on one action
// add event listener on process
process.on('exit', function (code) {
  console.log('bye bye~ ^_^..!');
});

// add uncaughtException event on process
process.on('uncaughtException', function (error) {
  console.log('there was an exception');
});

// incur exception 3times 2sec intervals
var count = 0;
var test = function() {
  count++;
  if(count > 3) { return; }

  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);
