'use strict';
var readlineSync = require('readline-sync');

let q1 = [
  "What would be your perfect day-off?",
  "Sitting at a cafe with a close friend",
  "Visiting the museum",
  "Day-trip at the nature",
  "Shopping at the mall",
  2, 1, 3, 4
]

let q2 = [
  "How do you like to spend your evenings?",
  "Cooking and baking",
  "Searching flights for my next vacation",
  "Watching documentary movies",
  "Going out for a picnic and star-watching",
  2, 4, 1, 3
]

let q3 = [
  "What would you like to receive as a birthday present?",
  "A tent",
  "Tickets to the theater",
  "A language class voucher",
  "A family dinner at a good restaurant",
  3, 1, 4, 2
]

let q4 = [
  "Who is your ideal partner?",
  "A mysterious tourist from a foreign country",
  "Someone who loves game nights' evenings and hosting friends ",
  "A Dsophisticate person who loves culture ay-trip at the nature",
  "Someone adventurous who loves hiking ",
  4, 2, 1, 3
]

let q5 = [
  "What kind of sport do you prefer?",
  "Chess-mat",
  "Ski",
  "Basketball or football",
  "Mountain climbing",
  1, 4, 2, 3
]


let questions1 = [q1, q2, q3, q4, q5]


function star(n){
    let str = '';
    for(let i = n; i >= 1; i -= 1){
        for(let k = n; k >= i; k -= 1){
            str += "  ";
        }
        for(let j = i; j >= 1; j -= 1){
            str += "*"+"   ";
        }
        console.log(str);
        str = "";
    }
}


function quiz_game(questions){
    console.log("--------------------\nHello! Welcome to the quiz!\n--------------------");
    star(4);
    console.log("    ------------\n   First question\n    ------------");
    let total = 0;
    for (let i = 0; i < questions.length; i+=1){
    let ans = readlineSync.keyInSelect(questions[i].slice(1 ,5), questions[i].slice(0, 1));
    ans = questions[i].slice(ans + 5, ans + 6)[0];
    total += ans;
  }
  console.log("    ------------\n   Quiz results\n    ------------");
  if (9 >= total && total >= 5){
      console.log("You should spend the lock-down days at an air-bnb condo in a bohemian city");
  }
  else if (12 >= total && total >= 10){
      console.log("You should spend the lock-down days at a small town with a warm community");
  }
  else if (16 >= total && total >= 13){
    console.log("You should spend the lock-down days at a Kibutz or Moshav, close to the nature");
  }
  else if (20 >= total && total >= 17){
    console.log("Run away from the country, I heard there is no lock-down at Cyprus!");
  }
  else {
      console.log("Oops, did you answer all the questions?");
  }
}


quiz_game(questions1);

