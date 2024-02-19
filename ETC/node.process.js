// process.argv
console.log('- process.env:', process.env);
console.log('- process.version', process.version);

process.argv.forEach(function (item, index) {
  // print
  console.log(index + ' : ' + typeof (item) + ' : ', item);

  // if there is --exit
  if (item == '--exit') {
    // get next argument
    var exitTime = Number(process.argv[index +  1]);
    // exit program after a while
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
});
