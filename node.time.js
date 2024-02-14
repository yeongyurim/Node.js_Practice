// maesure time consumption
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++) {
  output *= i;
}
console.log('Result:', output);

// halt
console.timeEnd('alpha');
