'use strict';
var readlineSync = require('readline-sync');


let myArray = [0,1,2,3,4,5];
let myArray2 = ["a", "b", "c", "d", "e", "f"];


function reverseList(array){
  let temp;
  for (let i = 0; i < array.length/2; i += 1){
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array
}


console.log(myArray);
console.log(myArray2);
console.log(reverseList(myArray));
console.log(reverseList(myArray2));

