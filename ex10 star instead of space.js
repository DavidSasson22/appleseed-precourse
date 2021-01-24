'use strict';
var readlineSync = require('readline-sync');


function star_insted_of_space(){
  let string = readlineSync.question("Please insert a string: ")
  console.log(string.replace(/ /g, "*"));
}


star_insted_of_space()