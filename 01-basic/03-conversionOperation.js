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

//? to convert number to string we can use String() function or toString() method

let number = 33;
console.log(number);
console.log(typeof (number)); // number is a number

//! converting number to string
console.log("-----------------converting number to string---------------");
let valueInString = String(number); // converting number to string

console.log(valueInString);
console.log(typeof (valueInString)); // valueInString is a string