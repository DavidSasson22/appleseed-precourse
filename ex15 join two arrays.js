'use strict';
var readlineSync = require('readline-sync');


let myArray = ["Hello", "I", "am", "a", "new", "student."];
let yourArray = ["We", "are", "AppleSeeds.", "Welcome"]


function join2Arrays(array1, array2){
  let result = [];
  for (let i =0; i < array1.length; i += 1){
    result.push(array1[i]);
  }
  for (let i =0; i < array2.length; i += 1){
    result.push(array2[i]);
  }
  return result
}


console.log(join2Arrays(myArray, yourArray));

