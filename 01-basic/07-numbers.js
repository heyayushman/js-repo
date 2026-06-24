//! Numbers in JavaScript

// JavaScript has a single number type: 64-bit floating point (double precision).
// This means that all numbers, whether integers or decimals, are represented as floating-point values.

let integer = 42; // An integer
let float = 3.14; // A floating-point number

// console.log(integer);
// console.log(float);


let x = 0.1;
let y = 0.2;
let sum = (x * 10 + y * 10) / 10; // This is a common workaround to avoid floating-point precision issues

// console.log(sum); // Output: 0.3


//* JavaScript also supports special numeric values:
let infinity = Infinity; // Represents positive infinity
let negativeInfinity = -Infinity; // Represents negative infinity
let notANumber = NaN; // Represents a value that is not a number

//? Adding Numbers and Strings

//* When you add a number and a string, JavaScript converts the number to a string and concatenates them.
// For example:

//* if we add a number and a string, the number will be converted to a string and concatenated with the other string. For example:
let num = 5;
let str = " apples";
let result = num + str; // This will convert num to a string and concatenate
// console.log(result); // Output: "5 apples"

//* If you want to perform arithmetic addition, you need to ensure both operands are numbers. You can use the Number() function to convert a string to a number:
let num1 = 5;
let strNum = "10";
let sum2 = num1 + Number(strNum);

//* If you add two strings, the result will be a string concatenation:

let p = "10";
let q = "20";
let s = p + q; // This will concatenate the two strings
// console.log(s); // Output: "1020"

//* To perform numeric addition, you can convert the strings to numbers first:
let xx = "10";
let yy = "20";
let numX = Number(xx);
let numY = Number(yy);
let sum3 = numX + numY; // This will perform numeric addition
// console.log(sum3); //* Output: 30

//? A common mistake is to expect this result to be 30:

let a = 10;
let b = 20;
let c = "The result is: " + a + b; // This will concatenate the string with the numbers, resulting in "The result is: 1020"
// console.log(c); //* Output: "The result is: 1020"

//? To get the expected result, you can use parentheses to ensure the addition happens before concatenation:
let c2 = "The result is: " + (a + b); // This will first add x and y, then concatenate with the string
// console.log(c2); //* Output: "The result is: 30"

//! Numeric Strings

// JavaScript will try to convert strings to numbers in all numeric operations:
let number = "100";
let number2 = "10";
let number3 = number / number2; // This will convert the strings to numbers and perform division
// console.log(number3); //* Output: 10

let X = "100";
let Y = "10";
let Z = X * Y;
// console.log(Z); //* Output: 1000

let num100 = "100";
let num10 = "10";
let result2 = num100 - num10; // This will convert the strings to numbers and perform subtraction
// console.log(result2); //* Output: 90

//* However, if the string cannot be converted to a number, the result will be NaN:
let xHello = "Hello";
let y10 = 10;
let zResult = xHello / y10;
// console.log(zResult); //* Output: NaN

//! NaN - Not a Number

//? NaN is a JavaScript reserved word indicating that a number is not a legal number.
let num2 = 100 / "Apple";
// console.log(num2); //* Output: NaN

//? However, if the string is numeric, the result will be a number:
let num3 = 100 / "10";
// console.log(num3); //* Output: 10

//? NaN is a number type, but it is not equal to any number, including itself:
let num4 = NaN;
// console.log(num4 == NaN); // Output: false
// console.log(num4 === NaN); // Output: false

//? To check if a value is NaN, you can use the isNaN() function:
let num5 = NaN;
// console.log(isNaN(num5)); //* Output: true

let num6 = 10;
// console.log(isNaN(num6)); //* Output: false

//! JavaScript Numbers as Objects

//? In JavaScript, numbers can also be treated as objects. When you create a number using the Number() constructor, it creates a number object:
let numObj = new Number(42);
// console.log(numObj); // Output: [Number: 42]
// console.log(typeof numObj); // Output: "object"

//? ***********************___Hitesh___**************************//

let score = 400;
console.log(score); // Output: 400

let balance = new Number(1000);
console.log(balance);

console.log(balance.toString()); // Output: "1000"
//* The toString() method converts a number to a string. It can also take an optional parameter to specify the base (radix) for the conversion. For example, to convert a number to binary, you can use: */

//* For example:
let numtoString = 255;
console.log(numtoString.toString(2)); // Output: "11111111" (binary representation)
console.log(numtoString.toString(8)); // Output: "377" (octal representation)
console.log(numtoString.toString(16)); // Output: "ff" (hexadecimal representation)


console.log(balance.toLocaleString()); // Output: "1000"

//* toLocaleString() method converts a number to a string, using local language format. For example, in the US, it will use commas as thousands separators, while in some European countries, it will use periods.

//* For example:
let largeNumber = 1234567.89;
console.log(largeNumber.toLocaleString("en-IN")); // Output: "12,34,567.89" (Indian format)


//* The toFixed() method formats a number using fixed-point notation. It takes an integer parameter that specifies the number of digits after the decimal point. */

//* For example:
let numFixed = 3.14159;
console.log(numFixed.toFixed(2)); // Output: "3.14"
console.log(numFixed.toFixed(4)); // Output: "3.1416" (rounded to 4 decimal places)

//* The toPrecision() method formats a number to a specified length. It takes an integer parameter that specifies the total number of significant digits. */

//* For example:
let numPrecision = 3.14159;
console.log(numPrecision.toPrecision(3)); // Output: "3.14"
console.log(numPrecision.toPrecision(5)); // Output: "3.1416" (rounded to 5 significant digits)
console.log(numPrecision.toPrecision(4)); // Output: "3.142" (rounded to 4 significant digits)

//* The valueOf() method returns the primitive value of a Number object. It is usually called internally by JavaScript, but you can also call it explicitly. */

//* For example:
let numValue = new Number(42);
// console.log(numValue.valueOf()); // Output: 42

//* toExponential() method returns a string representing the number in exponential notation. It takes an optional parameter that specifies the number of digits after the decimal point. */

//* For example:

let numExponential = 123456;
// console.log(numExponential.toExponential()); // Output: "1.23456e+5"
// console.log(numExponential.toExponential(2)); // Output: "1.23e+5" (2 digits after the decimal point)

//! Static Methods
//? Static methods can only be used on Number:

