'use strict';
var readlineSync = require('readline-sync');


let name = readlineSync.question('Please insert your name: ');
console.log('Hello ' + name + '!');