'use strict';
const readlineSync = require('readline-sync');

/**
 * Represents a single restaurant by common characteristics
 */
class Restaurant {
  /**
   * @param {String} name         The restaurant's name
   * @param {String} city         The city that hosts the restaurant
   * @param {Number} maxDiners    The max number of diners that can be served
   * @param {Number} kashrutCode  The restaurant's level of Kashrut
   * @param {String} style        The restaurant's style / cuisine
   */
  constructor (name, city, maxDiners, kashrutCode, style) {
    this.name = name;
    this.city = city;
    this.maxDiners = maxDiners;
    this.kashrutCode = kashrutCode;
    this.style = style;
  }
}

/**
 * Represents a set of user preferences as features ready for further processing
 */
class Preferences {
  /**
   * @param {Number} numDiners    The total number of diners in request
   * @param {Number} kashrutCode  The level of acceptable Kashrut prefered
   * @param {String} style        The prefered restaurant style / cuisine
   */
  constructor (numDiners, kashrutCode, style) {
    this.numDiners = numDiners;
    this.kashrutCode = kashrutCode;
    this.style = style;
  }
}

/**
 * Populates a list with restaurant data.
 *
 * @return {Array<Restaurant>}
 */
function loadRestaurantData () {
  const restaurants = [];
  
  restaurants.push(new Restaurant('Hudson', 'Tel Aviv', 20, 0, 'Meet'));
  restaurants.push(new Restaurant('Oasis', 'Tel Aviv', 5, 0, 'Home food'));
  restaurants.push(new Restaurant('Opa', 'Tel Aviv', 6, 0, 'Vegan/Vegeterian'));
  restaurants.push(new Restaurant('Igra Rama', 'Tel Aviv', 4, 0, 'Fish'));
  restaurants.push(new Restaurant('Abie', 'Tel Aviv', 8, 0, 'Fish'));
  restaurants.push(new Restaurant('Alena', 'Tel Aviv', 6, 0, 'Asian'));
  restaurants.push(new Restaurant('West Side', 'Tel Aviv', 10, 2, 'Meet'));
  restaurants.push(new Restaurant('Memphis', 'Tel Aviv', 12, 1, 'Meet'));
  restaurants.push(new Restaurant('Eve', 'Tel Aviv', 12, 1, 'Vegan/Vegeterian'));
  restaurants.push(new Restaurant('Yusef', 'Tel Aviv', 6, 2, 'Home food'));
  
  return restaurants;
}

/**
 * Get user preferences from terminal, validates input,
 * builds a Preferences object to represent user choices.
 *
 * @param {Array} restaurantStyles
 * @return {Preferences}
 */
function getUserPreferences (restaurantStyles) {
  /**
   * User input:
   *   {Number} numDiners
   *   {String} kashrut         ['y','n']
   *   {String} mehadrin        ['y','n']
   *   {Number} foodStyleIndex
   */
  let numDiners = Number(readlineSync.question('How many people are you going with? '));
  if (isNaN(numDiners)) {
    throw TypeError('Wrong data type: Expected a number!');
  } else {
    // Include the user in the total number of diners
    numDiners += 1;
  }
  
  const kashrut = readlineSync.question('Should it be Kosher? (y/n): ');
  let kashrutCode;
  
  if (kashrut === 'y') {
    const mehadrin = readlineSync.question('Should it be Kashrut Lemehadrin? (y/n): ');
    
    if (mehadrin === 'y') {
      kashrutCode = 2;
    } else if (mehadrin === 'n') {
      kashrutCode = 1;
    } else {
      throw new Error("Lemehadrin not 'y' or 'n': stop execution");
    }
  } else if (kashrut === 'n') {
    kashrutCode = 0;
  } else {
    throw new Error("Kosher not 'y' or 'n': stop execution");
  }
  
  const styleIndex = readlineSync.keyInSelect(restaurantStyles.sort(), 'What style of food do you prefer? ');
  
  return new Preferences(numDiners, kashrutCode, restaurantStyles[styleIndex]);
}

/**
 * Get a list of restaurant suggestions based on user preferences.
 *
 * @param {Array} restaurants
 * @param {Preferences} userPrefs
 * @return {Array<Restaurant>}
 */
function getSuggestions (restaurants, userPrefs) {
  const suggestions = [];
  for (const rest of restaurants) {
    if (rest.maxDiners >= userPrefs.numDiners && rest.kashrutCode >= userPrefs.kashrutCode && rest.style === userPrefs.style) {
      suggestions.push(rest);
    }
  }
  
  return suggestions;
}

/**
 *
 * Main program logic
 *
 */
function main () {
  const rests = loadRestaurantData();
  
  // Prepare a list of distinct restaurants 'styles' for the getUserPreferences function.
  const restStyles = [];
  for (const rest of rests) {
    if (!restStyles.includes(rest.style)) {
      restStyles.push(rest.style);
    }
  }
  
  const userPrefs = getUserPreferences(restStyles);
  const suggestions = getSuggestions(rests, userPrefs);
  
  // Prints suggestions if any were found
  if (!suggestions.length) {
    console.log('Oops!, we couldn\'t find any restaurant for you!\nWe will try better next time!');
  } else {
    console.log('\nHere are some suggestions that you may like:');
    
    for (const rest of suggestions) {
      console.log(rest.name);
    }
  }
}

main();
