'use strict';
var readlineSync = require('readline-sync');


function digit_in_num(number, digit){
  //this function checks if a single number contains a specific digit.
  //by dividing the number by 10, and removing the fractional digits from the result,
  //we  can actually check every digit in the number.
  while(number > 0){
      if(number % 10 == digit){
          return true;
      }
      number = Math.trunc(number / 10);        
  }
  return false;
}


function boom7(){
  for (let i = 1; i <= 100; i +=1){
    if (digit_in_num(i, 7) || i % 7 == 0){
      console.log("BOOM");
    }
    else{
      console.log(i);
    }
  }
}


boom7()