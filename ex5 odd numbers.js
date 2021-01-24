'use strict';
var readlineSync = require('readline-sync');


function odd_numbers(num){
  for(let x = 1; x <= num; x +=2){
    console.log(x);
  }
}


odd_numbers(100)