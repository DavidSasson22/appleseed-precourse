'use strict';
var readlineSync = require('readline-sync');
var figlet = require('figlet');


var printHangMan = 
["\n|",
 "\n|\n|",
 "___\n|\n|",
 "____\n|  |\n|\n|",
 "____\n|  |\n|  O\n|",
 "____\n|  |\n|  O\n|  |\n|",
 "____\n|  |\n|  O\n| /|\n|",
 "____\n|  |\n|  O\n| /|\\\n|",
 "____\n|  |\n|  O\n| /|\\\n| /",
 "____\n|  |\n|  O\n| /|\\\n| / \\"];


var words = 
["fiction", "amputate", "partnership",
"effort", "ballot", "auditor", "minute",
"instinct", "credit", "prosper"];


function lettersIndex(string, letter){
  let result = [];
  for(let i = 0; i < string.length; i += 1){
    if (string[i] === letter) result.push(i);
  }
  return result;
}


function playHangMan(){
  let word = words[Math.floor(Math.random() * (words.length - 0) + 0)].toLocaleLowerCase();
  let hiddenWord = "*".repeat(word.length);
  let attempts = 10;
  let guess = "";
    
  while (attempts > 0 && hiddenWord != word){
    console.log("\nYou have " + attempts + " guesses");
    console.log("The word is:\n" + hiddenWord);
    guess = readlineSync.question("What is your guess?\n");
    if (!guess.match(/[a-zA-Z]/) || guess.length !== 1){
      console.log("Invalid input: please enter one alphabetic character only\n");
    }
    else {
      guess = guess.toLowerCase();
      if(!word.includes(guess)){
        console.log(guess + " not in the word");
        console.log(printHangMan[printHangMan.length - attempts]);
        attempts -= 1;
      }
      else{
        console.log("Nice job!");
        let letterIndex = lettersIndex(word, guess);
        hiddenWord = hiddenWord.split('');
        letterIndex.forEach(letter => {
          hiddenWord[letter] = guess;          
        });
        hiddenWord = hiddenWord.join('');
      }
    }
  }
  if(hiddenWord == word){
    console.log("\n" + hiddenWord);
    console.log("\n====YOU WON====");
  }
  else{
    console.log("\n====GAME OVER====");
  }
}


console.log(figlet.textSync("HANG MAN", {
  font: 'doom',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
}));


playHangMan();

