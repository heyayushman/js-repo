//? Type conversion is the process of converting a value from one data type to another. In JavaScript, there are two types of type conversion: implicit and explicit.

//* Implicit type conversion (type coercion) occurs when JavaScript automatically converts a value from one data type to another, based on the context in which it is used. For example, when a number is added to a string, JavaScript will convert the number to a string before performing the concatenation.

//* Explicit type conversion occurs when a developer manually converts a value from one data type to another using built-in functions or methods. For example, using the Number() function to convert a string to a number, or using the String() function to convert a number to a string.

//* Type conversion can be useful in certain situations, but it can also lead to unexpected results if not used carefully. It is important to understand how type conversion works in JavaScript and to use it appropriately in your code.

// let score = 33;

// console.log(score);
// console.log(typeof (score)); // score is a number

let score2 = true;
// console.log(score2);
// console.log(typeof (score2));// score2 is a string


//? to convert string to number we can use Number() function or parseInt() function

let valueInNumber = Number(score2); // converting string to number

// console.log(valueInNumber);
// console.log(typeof (valueInNumber)); // valueInNumber is a number

// "33" => 33
// "33abc" => NaN
// true => 1; 
// false => 0
// null => 0

//let valueInNumber = parseInt(score2); // parseInt is used to convert string to integer, it will ignore any non-numeric characters after the number, it should be used when specifically wnat an integer value from a string


//* well, Number converts only if a string has any number, if a string contains any alphabet inside it, it will show NaN ... "33abc" ==> NaN) but (when we use parseInt, it helps to extract number from a string, an aplhanumeric string "33abc" ==> 33)

let isLoggedIn = 1; // 1 => true, 0 => false
let booleanIsLoggedIn = Boolean(isLoggedIn); // converting number to boolean

// console.log(booleanIsLoggedIn);
// console.log(typeof (booleanIsLoggedIn)); // booleanIsLoggedIn is a boolean

// 1 => true
// "" => false
// "raghav" => true

// ? to convert number to string we can use String() function or toString() method

let number = 33;
// console.log(number);
// console.log(typeof (number)); // number is a number

//! converting number to string
// console.log("-----------------converting number to string---------------");
let valueInString = String(number); // converting number to string

// console.log(valueInString);
// console.log(typeof (valueInString)); // valueInString is a string


// **************************OPERATIONS****************************//

let a = "5";
let b = 6;

// console.log(a + b); // 56 (string concatenation)
// console.log(a - b); // -1 (string is converted to number)
// console.log(a * b); // 30 (string is converted to number)
// console.log(a / b); // 0.8333333333333334 (string is converted to number)

let value = 3
let negValue = -value; // negating the value of a number
// console.log(negValue); // -3

// console.log(2**3); // 8 (exponentiation operator, 2 raised to the power of 3)
// console.log(10 / 3); // 3.3333333333333335 (division operator)
// console.log(10 % 3); // 1 (modulus operator, remainder of 10 divided by 3)

let str1 = "Hello";
let str2 = "World";

// console.log(str1 + " " + str2); // Hello World (string concatenation)
// console.log(`Length of string str1 : ${str1.length}`); // 5 (length of the string)
// console.log(str1.toUpperCase()); // HELLO (convert to uppercase)
// console.log(str1.toLowerCase()); // hello (convert to lowercase)

// console.log("1" + 2); // 12 (string concatenation)
// console.log("1" - 2); // -1 (string is converted to number)
// console.log("1" + 2 + 3); // 123 (string concatenation)
console.log(1 + 2 + "3" + 3 + 1); // 33 (1 + 2 is evaluated first to 3, then "3" is concatenated to 3, resulting in "33", and then 3 and 1 are concatenated to "33", resulting in "3331")
// console.log("1" - 2 + 3); // 2 (string is converted to number)
// console.log("1" * 2); // 2 (string is converted to number)
// console.log("1" / 2); // 0.5 (string is converted to number)
// console.log("1" % 2); // 1 (string is converted to number)

// console.log(true + 2); // 3 (true is converted to 1)

let gameCounter = 100;
console.log(`${gameCounter} : Actual value`); // 100
gameCounter++; // incrementing the value of gameCounter by 1
console.log(`${gameCounter} : Value after increment`); // 101

