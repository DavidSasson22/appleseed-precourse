'use strict';
const readlineSync = require('readline-sync');

/**
 * Takes 1 integer from the user, between 0-9, and prints the number in words
 */
function fromNumToWord () {
  const num = Number(readlineSync.question('Please insert your number: '));
  
  const numMap = new Map();
  
  numMap.set(0, 'ZERO');
  numMap.set(1, 'ONE');
  numMap.set(2, 'TWO');
  numMap.set(3, 'THREE');
  numMap.set(4, 'FOUR');
  numMap.set(5, 'FIVE');
  numMap.set(6, 'SIX');
  numMap.set(7, 'SEVEN');
  numMap.set(8, 'EIGHT');
  numMap.set(9, 'NINE');
  
  console.log(numMap.get(num));
}

fromNumToWord();
