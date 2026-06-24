//! Maths in JavaScript

//? JavaScript provides a built-in Math object that has properties and methods for mathematical constants and functions. It is not a function object.

//? Math Properties (Constants)
// The syntax for any Math property is : Math.property.

//* JavaScript provides 8 mathematical constants that can be accessed as Math properties: */

Math.E        // returns Euler's number
// console.log(Math.E)
Math.PI       // returns PI
// console.log(Math.PI)
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

//? Math Methods
//? The syntax for Math any methods is : Math.method(number)*/

//* For example, you can use the Math object to perform various mathematical operations:

//? Number to Integer
//* There are 4 common methods to round a number to an integer: */

//? Math.round(x)	Returns x rounded to its nearest integer

let number1 = 7.8;
let roundedValue = Math.round(number1); // This will round 7.8 to the nearest integer
// console.log(roundedValue); //* Output: 8

//? Math.ceil(x)	Returns x rounded up to its nearest integer

let number2 = 3.2;
let ceilingValue = Math.ceil(number2); // This will round 3.2 up to the nearest integer
// console.log(ceilingValue); //* Output: 4

//? Math.floor(x)	Returns x rounded down to its nearest integer

let number3 = 4.7;
let floorValue = Math.floor(number3); // This will round 4.7 down to the nearest integer
// console.log(floorValue); //* Output: 4

//? Math.trunc(x)	Returns the integer part of x
let number4 = 4.6;
let truncValue = Math.trunc(number4)

//? Math.sqrt() Returns square of a number
let number5 = 9;
let squareRoot = Math.sqrt(number5); // This will calculate the square root of 9
// console.log(squareRoot); //* Output: 3

//? Math.pow(x, y) returns the value of x to the power of y:
let number6 = 5;
let power = Math.pow(number6, 2); // This will calculate 5 raised to the power of 2
// console.log(power); //* Output: 25

//? Math.abs(x) returns the absolute (positive) value of x:
let number7 = -10;
let absoluteValue = Math.abs(number7); // This will calculate the absolute value of -10
// console.log(absoluteValue); //* Output: 10

//? Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
//* Math.min()
console.log(Math.min(0, 150, 30, 20, -8, -200));

//* Math.max()
console.log(Math.max(0, 150, 30, 20, -8, -200));
//? Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):


// let number8 = 1.5;
let randomValue = Math.random(); // This will generate a random number between 0 (inclusive) and 1 (exclusive)
console.log(randomValue); //* Output: A random number between 0 and 1

