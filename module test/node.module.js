// get abs method
exports.abs = function (number) {
  if (0 < number) {
    return number;
  } else {
    return -number;
  }
};

// get area of circle
exports.circleArea = function (radius) {
  return radius * radius * Math.PI;
};
