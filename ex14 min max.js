'use strict';
var readlineSync = require('readline-sync');


function isNatural(number){
  let n1 = Math.abs(number);
  let n2 = parseInt(number, 10);
  return !isNaN(n1) && n2 === n1;
}


function random_num() {  
  return Math.floor(Math.random() * (50 - 1) + 1); 
} 


function max_and_min(array){
   let max = array[0], min = array[0];
   array.forEach(function(current){
     if(current > max){
       max = current;
      }
      if (current < min){
        min = current;
      }
    })
    return [max, min];
}


function main(){
  let myArray = [];
  let arrayLength = readlineSync.question("Please insert an integer number: ");
  if (!isNatural(arrayLength)){
    throw TypeError('Wrong data type: Expected a natural number!');
  }
  for(let i = 0; i < arrayLength; i +=1){
    myArray.push(random_num());
  }
  console.log(myArray);
  let maxMin = max_and_min(myArray);
  console.log("Max number = " + maxMin[0] + "\nMin number = " + maxMin[1]);
}


main();

