'use strict';
var readlineSync = require('readline-sync');


function larger_than_10(){
  let user_answer = Number(readlineSync.question("please choose a number larger than 10: "));
  if (isNaN(user_answer)){
    throw new TypeError("NOT A NUMBER");
  }
  while (user_answer <= 10){
    user_answer = readlineSync.question("please choose a number LARGER than 10: ");
    if (isNaN(user_answer)){
      throw new TypeError("NOT A NUMBER");
    }
  }
  console.log("thank you");
}


larger_than_10()