'use strict';
var readlineSync = require('readline-sync');


function sum_10(){
    //this function takes 2 integers from the user, sum them and check if the result equals 10
    let num1 = Number(readlineSync.question('Please insert your first number: '));
    let num2 = Number(readlineSync.question('Please insert your second number: '));
    if (num1 + num2 == 10){
        console.log('makes 10');
    }
    else {
        console.log('nope');
    }        
}

sum_10()