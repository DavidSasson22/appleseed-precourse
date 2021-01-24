'use strict';
var readlineSync = require('readline-sync');

//Here are two solution to the problems, with two different approaches


function is_palindrome1(string){
  //this functions takes the original strings and split it to letters, that are stored in
  //a new array. than, we creat a new array, that store the indexes of the prior array in a
  //revers order. finally, we create new string from the revered array, using the join method.
  //if the new string is identical to the original, than we have a palindrom.  
  let step1 = string.split('');
  let step2 = step1.reverse();
  let final_step = step2.join('');
  if(string === final_step){
    console.log("This is a palindrome!");
    return true;
  }
  else{
    console.log("This is not a palindrome :(");
    return false;
  }
}


function is_palindrome2(string) {
  //this recursive funcion check if the first and the last charaters of the string
  //are identical. if they are, the function trims this letters, and checks again with
  //the new string. if the process ends when the newest string has 1 or 0 characters, 
  //we have a palindrom. 
  if (string.length <= 1) {
    console.log("This is a palindrome!");
    return true;
  }
  if (string[0] == string[string.length -1]) {
    return is_palindrome1(string.substring(1, string.length -1));
  }
  else {
    console.log("This is not a palindrome :(");
    return false;
  }
}


let case0 = readlineSync.question('Please insert a string: ');


is_palindrome1(case0);
is_palindrome2(case0);   