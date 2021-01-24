'use strict';
var readlineSync = require('readline-sync');


function longest_word(){
  //1. we will strip from the string any non-alphanumeric character, exept of space.
  //2. we will split each word of the string.
  //3. remove all empty strings from the array.
  //4. compare each word to the last element of the longest word array:
  //   if the word is longer than the element, we will empty the arry and insert the word to it,
  //   if it is equal to it, we will add it at the next index.
  //5. we will print the result.

  let longest_word = [""];
  let string = readlineSync.question("Please input a string: ");
  string = string.replace(/[^a-zA-Z ]/g, '');
  //if string == "" => print... should be a string
  let words = string.split(" " || "\t" || "\n");
  words = words.filter(item => item);

  let z = 0;
  for (let i = 0; i < words.length; i += 1){
    if (words[i].length > longest_word[z].length){
      longest_word = []
      z = 0;
      longest_word[z] = words[i]; 
    }
    else if (words[i].length == longest_word[z].length){
      z += 1;
      longest_word[z] = (words[i]); 
    }
  }for (let i = 0; i < longest_word.length; i += 1){
    console.log(longest_word[i]);
  }  
}


longest_word();