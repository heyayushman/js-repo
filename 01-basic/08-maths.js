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

//? Math.sqrt() Returns square root of a number
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
// console.log(Math.min(0, 150, 30, 20, -8, -200));

//* Math.max()
// console.log(Math.max(0, 150, 30, 20, -8, -200));



//? ******** Math.random() **********//

//! Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

//! Math.random() always returns a number lower than 1.

//? Math.random() used with Math.floor() can be used to return random integers. 

//* Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).
// Example outputs: 0.0, 0.237, 0.9999, but never 1.

let randomValue = Math.random(); // This will generate a random number between 0 (inclusive) and 1 (exclusive)
// console.log(randomValue); //* Output: A random number between 0 and 1 => 0.0 to 0.9999999999999999

let randomValue2 = Math.random() * 10; // gives a range from 0 up to 9 but excluding 10. 
//* Example possible results: 0.0, 3.5, 9.99, etc.

// console.log(randomValue2)

//? Math.floor() rounds a number down to the nearest whole integer:

// 3.5 becomes 3
// 9.99 becomes 9
// 0.1 becomes 0

//? The possible integer results are then 0 through 9 (both inclusive).
//? In other words, the range is [0, 9].

// Return a random integer from 0 to 10 (both included):
//? Math.floor(Math.random() * 11);
// console.log(Math.floor(Math.random() * 11));

// Return a random integer from 0 to 99 (both included):
//? Math.floor(Math.random() * 100);

// Return a random integer from 0 to 100 (both included):
//? Math.floor(Math.random() * 101);


//* Math.random() returns a number from 0 (inclusive) up to but not including 1. (less than 1)

//* Multiplying by 10 gives a number from 0 up to but not including 10. (less than 10)
//? Math.random() * 10

//* Adding 1 shifts that range to 1 up to but not including 11. (starts from 1 upto less than 11) 
//? (Math.random() * 10) + 1

//* Math.floor() then rounds down, so you get an integer between 1 and 10. (1 - 10) 

// Return a random integer between 1 and 10 (both included):
//? Math.floor(Math.random() * 10) + 1;
// console.log(Math.floor(Math.random() * 10) + 1);

//! A Proper Random Function
//* This JavaScript function always returns a random integer between min and max (both included):

//? Example


function getRandomInteger(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const min = 10;
const max = 20;

console.log(getRandomInteger(max, min))
