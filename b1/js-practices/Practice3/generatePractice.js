'use strict'

function generate(testLengthArray) {
  var test = {
    "input": testLengthArray,
    "target": 2222,
    "output": '', 
  }

  testLengthArray.forEach(function(item, index, array)) {}

  return testLengthArray.map(function(item, index)) {}

  if (test.input.includes(test.target) == false) {
    console.log("*Not found*");
  } else if (test.input.indexOf(test.target) == 0) {
    console.log("*First index*");
    test.output = test.input.indexOf(test.target);
  } else if (test.input.indexOf(test.target) == (test.input.length - 1)) {
    console.log("*Last index*");
    test.output = test.input.indexOf(test.target);
  } else if ((test.input.indexOf(test.target) != 0) || (test.input.indexOf(test.target) != test.input.length - 1 )) {
    console.log("*Middle index*");
    test.output = test.input.indexOf(test.target);
  }
  
  console.log(test);
}

generate([1, 2, 10, 5000, -20, -8563, 1346, 8565, 4520, 20, 30, 50, 9999, -9999, 5232, 1234, 2000, 5555, -9996, -1999, -1998, -1997, 2222, 0, 6545])

module.exports = generate
