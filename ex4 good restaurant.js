'use strict';
var readlineSync = require('readline-sync');


//First we will create an restaurant class
class Restaurant {
  constructor(name, city, max_diners, kashrut, kind){
    this.name = name;
    this.city = city;
    this.max_diners = max_diners;
    this.kashrut = kashrut;
    this.kind = kind 
  }
}


//Here is the restaurant database: this.kashrut = 0 means that the restaurant is not kosher,
// 1 means that it has regular kosher, and 2 means mehadrin kosher
var hudson = new Restaurant('Hudson', 'Tel Aviv', 20, 0, 'Meet');
var oasis = new Restaurant('Oasis', 'Tel Aviv', 5, 0, 'Home food');
var opa = new Restaurant('Opa', 'Tel Aviv', 6, 0, 'Vegan/Vegeterian');
var igra_rama = new Restaurant('Igra Rama', 'Tel Aviv', 4, 0, 'Fish');
var abie = new Restaurant('Abie', 'Tel Aviv', 8, 0, 'Fish');
var alena = new Restaurant('Alena', 'Tel Aviv', 6, 0, 'Asian');
var west_side = new Restaurant('West Side', 'Tel Aviv', 10, 2, 'Meet');
var memphis = new Restaurant('Memphis', 'Tel Aviv', 12, 1, 'Meet');
var eve = new Restaurant('Eve', 'Tel Aviv', 12, 1, 'Vegan/Vegeterian');
var yusef = new Restaurant('Yusef', 'Tel Aviv', 6, 2, 'Home food');


//We will insert all restaurants objects into an array
var restaurants = [hudson, oasis, opa, igra_rama, abie, alena, west_side, memphis, eve, yusef];


//Now we will create a list of restaurants 'styles'. we will use it later with
//the keyInSelect method.  
var restaurant_style = []
for (let i = 0; i < restaurants.length; i += 1){
  if (restaurant_style.includes (restaurants[i].kind)){
    continue
  }
  restaurant_style.push(restaurants[i].kind)
}


function isNatural(number){
  //This takes a number and creates 2 different number from it: The first, is
  //an absulut number of the original, the seconed is a round int of the original.
  //if both numbers equals, than the original number is natural.
  let n1 = Math.abs(number);
  let n2 = parseInt(number, 10);
  return !isNaN(n1) && n2 === n1;
}


function choose_resturant(){
  //This function takes features of the prefered restaurant from the user,
  //and match them with restaurants in the database.
  let diners_num = Number(readlineSync.question('How many people are you going with? '));
  if (!isNatural(diners_num)){
    throw TypeError('Wrong data type: Expected a natural number!');
  }

  let kashrut = readlineSync.question('Should it be Kosher? (y/n): ');
  if (kashrut != 'y' && kashrut != 'n'){
    throw new Error("not 'y' or 'n': stop execution");
  }

  if (kashrut == 'y'){
    kashrut = readlineSync.question('should it be Kashrut Lemehadrin? (y/n): ');
    if (kashrut != 'y' && kashrut != 'n'){
      throw new Error("not 'y' or 'n': stop execution");
    }

    if (kashrut == 'y'){
      kashrut = 2
    }
    else { kashrut = 1}
  }
  else {kashrut = 0}

  let food_kind = readlineSync.keyInSelect(restaurant_style.sort(), 'What kind of food do you prefer? ');
  food_kind = restaurant_style[food_kind]
  let result = [];
  
  for (let x = 0; x < restaurants.length; x += 1){
    if (restaurants[x].kashrut >= kashrut && restaurants[x].max_diners >= diners_num + 1 && restaurants[x].kind == food_kind){
      result.push(restaurants[x].name);
    }
  }
  if (!result.length){
    console.log('Oops!, we couldn\'t find any restaurant for you!\nWe will try better next time!');
  }
  else {
    console.log('Here are some suggestions you may like:')
    for (let x = 0; x < result.length; x +=1){
    console.log(result[x])
    }
  } 
}


choose_resturant()

