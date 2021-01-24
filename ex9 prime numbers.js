'use strict';
var readlineSync = require('readline-sync');


function is_prime(n){
  for (let i = 2; i < n; i += 1){
    if (n % i == 0){
      return false
    }
  }
  return true
}


function prime_in_range(){
  let n = readlineSync.question("Please enter a number: ")
  for (let i = 2; i <= n; i += 1){
    if(is_prime(i)){
      console.log(i);
    }
  }
}


prime_in_range()

