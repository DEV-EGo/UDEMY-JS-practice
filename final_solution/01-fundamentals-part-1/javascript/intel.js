/// operator precedence ////
////////////////////////////

// console.log(25-10-5);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

let x , y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10 {--evalutating from right to left---}
console.log(x,y);

const AverageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas,ageSarah, AverageAge)



/**
 * 
 
// /////// OPERATORS ///// /////

// calculate age
//////// //////////////////////
// /// Math operators (-, +)
////// ////////////////////////
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas , ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

// /// plus operator (+) ///////

const firstName = "jonas";
const lastName = "Schmedtman"
console.log(firstName + ' ' + lastName); /// will display the name and last name in one string

//  /// //////////////////// //////
// //// assignment operators //////
//  /// //////////////////// //////

let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; // x = x + 1
x --; //
x --;
// /// basically re assigning the x value ^^ 

console.log(x);

//  /// //////////////////// //////
// /// Comparison Operator //////////
//  /// //////////////////// //////
//  > , < , >= , ==

console.log(ageJonas > ageSarah); // asking the operator who's older true or false
console.log(ageSarah >= 18); // true she is older than 18

const isFullAge = ageSarah >= 18;
console.log (now - 1991 > now - 2018);



 * 
 */

//  /////// /////////////// ///////////////////////////
//   /////// 3 different ways to declare variables/////
//  /////// const - let - var /////////
//  /////// /////////////// ///////////////////////////

// let age = 28;

//mutating the age variable to new age

// age = 31;

//  //// when mutating variables the best practice is to use "let"

// CONST declares variables that are not suppose to change in the future
// THEY ARE NOT SUPPOSE TO  CHANGE

// const YearOfbirth = 1993;
// YearOfbirth = 2001;

// imutable variable aka can not be changed

// 
// var job = 'programer';
// job = 'teacher';

// lastName = "pinky";
// console.log(lastName);



/** 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23)

console.log("======================");

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log("======================");

// //// //// /////////// //////////
// variable name conventions /////
// /// //// /////////// //////////

let jonas_matilda = "jm";
let $function = 27;

console.log(jonas_matilda);
console.log($function);

console.log("======================");

let myFirstjob = "Mechanic";
let currentjob = "Student";

console.log(myFirstjob);
console.log(currentjob);

console.log("======================");

let job1 = "Mechanic";
let job2 = "Student";

console.log("======================");
*/

/**

/////// /// ///// ////////////////////////
// /////// data types below /////////////
// //// /// //// /////////////////////////

// declaring a new variable by using "let"

let javascriptIsFun = true;
console.log(true);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonaste");

// re-assign the variable with out the "let" and changing the content
javascriptIsFun = "hell yea";
console.log(typeof javascriptIsFun);

// undefine means an empty value
let year;
console.log(year);
console.log(typeof year);
// // when declaring an empty variable like this ^^ it will always shhow empty

// Assigning a new value to the variable "year" below

year = 1993
console.log(typeof year);

// "null" aka error aka not an object
console.log(typeof null);

  */