'use strict';
var readlineSync = require('readline-sync');


function vowel_capitalizer(){
  let string = readlineSync.question("Please input a string: ");
  let capitalized = "";
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (let i = 0; i < string.length; i +=1){
    if (!vowels.includes(string[i])){
      capitalized += string[i];
    }
    else{
      capitalized += string[i].toUpperCase();
    }
  }
  console.log(capitalized);
}


vowel_capitalizer()