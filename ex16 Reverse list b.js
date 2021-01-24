'use strict';
var readlineSync = require('readline-sync');


let myArray = [0,1,2];


function reverseList(array){
  for (let i = 0; i < Math.floor(array.length/2); i += 1){
    array[i] = array[i] + array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i] - array[array.length - 1 - i];
    array[i] = array[i] - array[array.length - 1 - i];
  }
  return array
}


console.log(myArray);
console.log(reverseList(myArray));

