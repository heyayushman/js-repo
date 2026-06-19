// ********************************Comparison************************************************//

// Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

let x = 5;
let y = 10;

// console.log(x == y); // false (equal to)
// console.log(x != y); // true (not equal to)
// console.log(x > y); // false (greater than)
// console.log(x < y); // true (less than)
// console.log(x >= y); // false (greater than or equal to)
// console.log(x <= y); // true (less than or equal to)

// Comparison operators can also be used with strings, where the comparison is based on the Unicode values of the characters.

let str1 = "apple";
let str2 = "banana";

// console.log(str1 == str2); // false
// console.log(str1 != str2); // true
// console.log(str1 > str2); // false
// console.log(str1 < str2); // true
// console.log(str1 >= str2); // false
// console.log(str1 <= str2); // true

let num1 = "5";
let num2 = 5;

// console.log(num1 == num2); // true (loose equality, type coercion occurs)
// console.log(num1 === num2); // false (strict equality, no type coercion)
// console.log(num1 != num2); // false (loose inequality, type coercion occurs)
// console.log(num1 !== num2); // true (strict inequality, no type coercion)

//* == checks for equality of value, while === checks for equality of both value and type. Similarly, != checks for inequality of value, while !== checks for inequality of both value and type.

//* === Strict equality operator checks for both value and type, while == loose equality operator checks for value only, allowing for type coercion.

//? type coercion is the process of converting one data type to another, which can lead to unexpected results when using loose equality (==) or inequality (!=) operators. Therefore, it is generally recommended to use strict equality (===) and strict inequality (!==) operators to avoid unintended type coercion and ensure more predictable comparisons.

// console.log("2" > 1); // true (string "2" is converted to number 2)
// console.log("2" < 1); // false (string "2" is converted to number 2)
// console.log("02" > 1)
console.log(null > 0); // false (null is converted to 0)
console.log(null == 0); // true (null is converted to 0)
console.log(null >= 0); // true (null is converted to 0)


// Comparison operators can also be used with boolean values, where true is considered greater than false.

let bool1 = true;
let bool2 = false;

// console.log(bool1 == bool2); // false
// console.log(bool1 != bool2); // true
// console.log(bool1 > bool2); // true
// console.log(bool1 < bool2); // false
// console.log(bool1 >= bool2); // true
// console.log(bool1 <= bool2); // false

//* Summary of comparison operators:

//? == : equal to (loose equality)
//? === : equal to (strict equality)
// != : not equal to (loose inequality)
// !== : not equal to (strict inequality)
// > : greater than
// < : less than
// >= : greater than or equal to
// <= : less than or equal to


