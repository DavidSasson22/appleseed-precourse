'use strict';
var readlineSync = require('readline-sync');


function from_num_to_word(){
    //This function takes 1 integer from the user, between 0-9, and prints the number in words 
    let num = Number(readlineSync.question('Please insert your number: '));
    let numMap = new Map(
        [[0, 'ZERO'], [1, 'ONE'], [2, 'TWO'], [3, 'THREE'], [4, 'FOUR'],
        [5, 'FIVE'], [6, 'SIX'], [7, 'SEVEN'], [8, 'EIGHT'], [9, 'NINE']]
        );
    if (num < 10 && num >=0){
      console.log(numMap.get(num));
    }
    else{
      console.log("Number should be between 0 and 9!")
    }   
  }

  
from_num_to_word()