'use strict'

function sort(input) {
  var object = {
    "input": input,
  }

  var temporal;
  for (var i = 0; i < object.input.length - 1; i++) {
    for (var j = i + 1; j < object.input.length; j++) {
      if (object.input[i] > object.input[j]) {
        temporal = object.input[i];
        object.input[i] = object.input[j];
        object.input[j] = temporal;
      }
    }
  }
  console.log(object.input);
}

sort([3321, 2999, 555, -1200, 4000])
module.exports = sort
