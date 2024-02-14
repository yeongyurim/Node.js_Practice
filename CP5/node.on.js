// lengthen the max listner
process.setMaxListeners(15);

// there can be at most 10 events on one action
// add event listener on process
process.on('exit', function (code) {
  console.log('bye bye~ ^_^..!');
});

var onUncaughtException = function (error) {
  // print
  console.log('there was an exception');

  process.removeListener('uncaughtException', onUncaughtException);
}
// add uncaughtException event on process
process.on('uncaughtException', onUncaughtException);

// disposalble event listener
process.once('uncaughtException', function (error) {
  console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ ..!');
})

// emit event by force
process.emit('exit');

// incur exception 3times 2sec intervals
var count = 0;
var test = function() {
  count++;
  if(count > 3) { return; }

  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);
