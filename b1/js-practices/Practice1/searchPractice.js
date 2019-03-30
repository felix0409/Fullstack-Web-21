'use strict'

function search (input, target) {
  
  var object = {
    "users_type": input,
    "target": target, 
  }

  var count = 0;
  for (var i = 0; i < object.users_type.length; i++) {
    if (object.users_type[i] == target) {
      console.log("Position: ", count); 
    } else { 
      count++;
    }
  }

  if (object.users_type.includes(target) == false) {
    console.log(-1);
    console.log("This target is not in the input array!")
  }
}

search([1, 8, 4, 6, 5, 2000, -6000, 4, 6, 5, 2000, -6000, 4, 6, 5, 2000, -6000, 999], 999)

module.exports = search
