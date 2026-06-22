"use strict"; //? use strict mode allows us to write cleaner code and avoid some common mistakes in JavaScript. It helps catch errors and prevents the use of certain features that are considered bad practice.

//* alert("Hello World") // alert is a function that shows a popup message in the browser, but we are not using it here because we are running this code in Node.js, which does not support alert. Instead, we will use console.log to print messages to the console.

let x = 5
console.log(x)

let UserName = "John"
let age = 30
let isStudent = true

//? In JavaScript, we have several data types that we can use to store different kinds of values. The main data types are:

//* 1. Number: This data type is used to represent both integer and floating-point numbers. 2 to the power of 53 minus 1 is the maximum safe integer in JavaScript, which is approximately 9 quadrillion. For example:
let num1 = 10
let num2 = 3.14

//? 2. String: This data type is used to represent text. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `). For example:
let str1 = 'Hello'
let str2 = "World"
let str3 = `Hello, ${UserName}!`

//* 3. Boolean: This data type represents a logical value that can be either true or false. For example:
let isTrue = true
let isFalse = false

//? 4. Null: This data type represents the intentional absence of any object value. It is often used to indicate that a variable has no value. For example:
let emptyValue = null

//* 5. Undefined: This data type represents a variable that has been declared but has not been assigned a value. For example:
let uninitializedVariable


//! Non-primitive data types:
//* 6. Object: This data type is used to store collections of data and more complex entities. Objects can have properties and methods. For example:

let person = {
    name: "Alice",
    age: 25,
    isStudent: false
}

//* 7. Symbol: This data type is used to create unique identifiers for objects. It is often used in advanced JavaScript programming. For example:
let uniqueId = Symbol("id")

//* 8. BigInt: This data type is used to represent integers that are larger than the maximum safe integer in JavaScript. For example:
let bigNumber = BigInt("9007199254740991")

//? These are the main data types in JavaScript, and they allow us to store and manipulate different kinds of data in our programs.

//* type of operator: The typeof operator is used to determine the data type of a variable or value. It returns a string indicating the type. For example:
console.log(typeof x) // number
console.log(typeof UserName) // string
console.log(typeof isStudent) // boolean
console.log(typeof emptyValue) // object (this is a known quirk in JavaScript)
console.log(typeof uninitializedVariable) // undefined
console.log(typeof person) // object
console.log(typeof uniqueId) // symbol
console.log(typeof bigNumber) // bigint