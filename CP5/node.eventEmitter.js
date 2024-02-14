// extract the Event Emitter
var EventEmitter = require('events');
var custom = new EventEmitter();

// add event
custom.on('tick', function (code) {
  console.log('이벤트를 실행합니다. ^_^');
});

custom.emit('tick');
