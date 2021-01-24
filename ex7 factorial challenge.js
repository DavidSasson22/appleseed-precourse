'use strict';
var readlineSync = require('readline-sync');


function isNatural(number){
  //This takes a number and creates 2 different number from it: The first, is
  //an absulut number of the original, the seconed is a round int of the original.
  //if both numbers equals, than the original number is natural.
  let n1 = Math.abs(number);
  let n2 = parseInt(number, 10);
  return !isNaN(n1) && n2 === n1;
}


function factorial(){
  let number = Number(readlineSync.question("Please enter an integer: "));
  if (!isNatural(number)){
    throw new Error("You should enter a WHOLE POSITIVE number!");
  }
  let result = 1;
  for (let i = number; i > 1; i -= 1){
    result = result * i;    
  }
  console.log(result);
}


factorial();

