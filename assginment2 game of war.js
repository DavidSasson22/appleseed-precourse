'use strict';
var readlineSync = require('readline-sync');
var figlet = require('figlet');


/* Part one: Here we make every thing we need for the game. thats includes:
card's deck, player object, random function, condition value for game to end/continue. */

var Deck = [];
const J = 11, Q = 12, K = 13, A = 14;
const suits = ["spade", "diamond", "club", "heart"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A];


function make_deck(){
  for (let i = 0; i < values.length; i +=1 ){
    for (let j = 0; j < suits.length; j += 1){
      let card = [values[i],suits[j]];
      Deck.push(card);
    }
  }
}


function pick_random(){
  return Deck[Math.floor(Math.random() * Deck.length)];
  }


function bye(){
    if(player1.cash == 50){
      console.log("farewell my friend")
    }
    else if(player1.cash > 50){
      console.log("Thank God it's over... It was embarrassing for me!")
    }
    else{
      console.log("Going already? I had so much fun (-;\nGood bye!")
    }
  }


class Player {
  constructor(name, cash, bet, card){
    this.name = name;
    this.cash = cash;
    this.bet = bet;
    this.card = card;
  }
}


var player1 = new Player("", 50, 0, []);
var wants_to_play = 1;


function lets_play_single(){
  player1.bet = Number(readlineSync.question("\nPlace your bet for the next round: 1 to " + player1.cash + ": "));
  
  if (player1.bet > player1.cash || player1.bet < 0){
    console.log("\nI said between 1 to " +  player1.cash + " and you typed " + player1.bet + "!\nI don't play with liars!!! Bye" );
    wants_to_play = 0;
  }
  else{
    player1.card = pick_random();
    let computer_card = pick_random();

    if (player1.card[0] > computer_card[0]){
      player1.cash = player1.cash + player1.bet;
      console.log("\nYour card is " + player1.card + " and my card is " + computer_card + "\nYou won " + player1.bet + " and now you have " + player1.cash);
      wants_to_play = 1 + readlineSync.keyInSelect(["Play another round"], "What would you like to do?", {cancel: "leave with my money :-)"});
      if(wants_to_play == 0){
      bye();
      }
    }

    else if (player1.card[0] < computer_card[0]){
      player1.cash = player1.cash - player1.bet;
      console.log("\nYour card is " + player1.card + " and my card is " + computer_card + "\nYou lose " + player1.bet + " and now you have " + player1.cash);
      if (player1.cash == 0){
        console.log("You are broke... Bye Bye");
        wants_to_play = 0;        
      }
      else{
        wants_to_play = 1 + readlineSync.keyInSelect(["Play another round"], "What would you like to do?", {cancel: "take my money and run!"});
        if(wants_to_play == 0){
          bye();
        }
      }
    }
    
    else if (player1.card[0] == computer_card[0]){
      console.log("\nYour card is " + player1.card + " and my card is " + computer_card + ". Lets try again!");
      wants_to_play = 1;
    }
  }
}


/* Part two: PLAY */

make_deck();


console.log(figlet.textSync("Welcome To WAR", {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
}));


player1.name = readlineSync.question("Please enter your name: ");
console.log('\nHello ' + player1.name +'. You currently have ' + player1.cash + ' NIS.');

while(player1.cash > 0 && wants_to_play == 1){
  lets_play_single();
}

