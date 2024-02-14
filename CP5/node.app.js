var rint = require('./node.rint');

rint.timer.on('tick', function (code) {
  console.log('이벤트를 실행합니다. ^_^');
})
