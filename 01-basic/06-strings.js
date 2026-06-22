//! Strings in JavaScript

//* A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str1}!`;

//* Strings are immutable, which means that once a string is created, it cannot be changed. However, you can create a new string by concatenating existing strings or by using template literals.

let greeting = str1 + " " + str2; // concatenation using + operator

//* String interpolation allows you to embed expressions inside a string using backticks and ${} syntax. This makes it easier to create dynamic strings without having to use concatenation.

let greeting2 = `${str1}, everyone ..! hello ${str2}`; // concatenation using template literals (string interpolation = embedding expressions inside a string using backticks and ${} syntax)

console.log(greeting); // Hello World
console.log(greeting2); // Hello, everyone ..! hello World

//* Strings have various methods that allow you to manipulate and work with them. Some common string methods include:

let message = "Hello, World!";

// console.log(message.length); // 13 (length of the string)
// console.log(message.toUpperCase()); // "HELLO, WORLD!" (converts to uppercase)
// console.log(message.toLowerCase()); // "hello, world!" (converts to lowercase)
// console.log("Index of W :", message.indexOf("World")); // 7 (index of the first occurrence of "World")
// console.log(message.slice(0, 5)); // "Hello" (extracts a portion of the string from index 0 to 5)
// console.log(message.replace("World", "JavaScript")); // "Hello, JavaScript!" (replaces "World" with "JavaScript")

//* Strings can also be treated as arrays of characters, allowing you to access individual characters using their index.

console.log(message[0]); // "H" (first character)
console.log(message[7]); // "W" (eighth character)

console.log(message.charAt(0)); // "H" (first character using charAt method)
console.log(message.__proto__);
console.log(message.indexOf("r"));

//* Strings can be compared using comparison operators, where the comparison is based on the Unicode values of the characters.

let strA = "apple";
let strB = "banana";

// console.log(strA == strB); // false
// console.log(strA != strB); // true
// console.log(strA > strB); // false
// console.log(strA < strB); // true
// console.log(strA >= strB); // false
// console.log(strA <= strB); // true

//* Summary of string comparison operators:

//? == : equal to (loose equality)
//? === : equal to (strict equality)
// != : not equal to (loose inequality)
// !== : not equal to (strict inequality)
// > : greater than
// < : less than
// >= : greater than or equal to
// <= : less than or equal to

//* Strings are a fundamental data type in JavaScript and are used to represent and manipulate text in various ways. 
//* They provide a wide range of methods and properties that allow you to work with them effectively in your programs.

//* Strings can also be created using the String constructor, but it is generally recommended to use string literals (single quotes, double quotes, or backticks) for simplicity and readability.

let str4 = new String("Hello, World!");

// console.log(typeof str4); // "object" (str4 is an object, not a primitive string)

//! Note: When using the String constructor, the resulting value is an object, not a primitive string. Therefore, it is generally better to use string literals for creating strings in JavaScript.

//* Summary: Strings in JavaScript are sequences of characters that can be manipulated using various methods and properties. They are immutable, can be compared, and can be created using string literals or the String constructor.


//* Strings are stored in stack memory as primitive data types, but when you create a string using the String constructor, it creates an object that is stored in heap memory. 
//* This is because objects in JavaScript are stored in heap memory, while primitive data types are stored in stack memory.

//* Methods
//? anchor() : This method is used to create a hyperlink in a string. It takes a URL as an argument and returns a string that represents the hyperlink. For example:

let link = "Click here".anchor("https://www.example.com");
console.log(link); // <a href="https://www.example.com">Click here</a>

//* The anchor() method is often used in conjunction with other string methods to create dynamic hyperlinks in web applications. It allows you to easily generate HTML links from strings, making it a useful tool for web development.

//? charAt() : This method is used to return the character at a specified index in a string. It takes an index as an argument and returns the character at that index. For example:

let str5 = "Hello, World!";
console.log(str5.charAt(0));

//* The charAt() method is useful for accessing individual characters in a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? charCodeAt() : This method is used to return the Unicode value of the character at a specified index in a string. It takes an index as an argument and returns the Unicode value of the character at that index. For example:

let str6 = "Hello, World!";
console.log(str6.charCodeAt(0)); // 72 (Unicode value of 'H')

//* The charCodeAt() method is useful for working with the underlying character encoding of a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? indexOf() : This method is used to return the index of the first occurrence of a specified value in a string. It takes a search value as an argument and returns the index of the first occurrence of that value in the string. If the value is not found, it returns -1. For example:

let str7 = "Hello, World!";
console.log(str7.indexOf("o"));

//* The indexOf() method is useful for searching for specific values in a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? lastIndexOf() : This method is used to return the index of the last occurrence of a specified value in a string. It takes a search value as an argument and returns the index of the last occurrence of that value in the string. If the value is not found, it returns -1. For example:

let str8 = "Hello, World!";
console.log(str8.lastIndexOf("o")); // 8 (index of the last occurrence of 'o')

//* The lastIndexOf() method is useful for searching for specific values in a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? localeCompare() : This method is used to compare two strings based on the current locale. It takes a string as an argument and returns a number indicating whether the string comes before, after, or is the same as the specified string in the current locale. For example:

let str9 = "apple";
let str10 = "banana";
console.log(str9.localeCompare(str10)); // -1 (str9 comes before str10 in the current locale)

//* The localeCompare() method is useful for comparing strings in a way that takes into account the rules of the current locale, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? match() : This method is used to search for a specified value in a string and return an array of matches. It takes a regular expression as an argument and returns an array of matches, or null if no matches are found. For example:

let str11 = "The quick brown fox jumps over the lazy dog.";
let regex = /the/gi; // regular expression to match "the" (case-insensitive)
console.log(str11.match(regex)); // ["The", "the"]

//* The match() method is useful for searching for specific patterns in a string using regular expressions, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.
//? regex is a pattern that is used to match character combinations in strings. In JavaScript, regular expressions are represented by the RegExp object, and they can be created using either the RegExp constructor or by using a regular expression literal (enclosed in forward slashes). Regular expressions can be used with various string methods, such as match(), replace(), search(), and split(), to perform complex string manipulations and pattern matching.

//? replace() : This method is used to replace a specified value in a string with another value. It takes two arguments: the value to be replaced and the value to replace it with. For example:

let str12 = "The quick brown fox jumps over the lazy dog.";
let newStr = str12.replace("fox", "cat");
console.log(newStr); // "The quick brown cat jumps over the lazy dog."

//* The replace() method is useful for replacing specific values in a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? search() : This method is used to search for a specified value in a string and return the index of the first occurrence of that value. It takes a regular expression as an argument and returns the index of the first match, or -1 if no match is found. For example:

let str13 = "The quick brown fox jumps over the lazy dog.";
let regex2 = /fox/;
console.log(str13.search(regex2)); // 16 (index of the first occurrence of "fox")

//* The search() method is useful for searching for specific patterns in a string using regular expressions, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? split() : This method is used to split a string into an array of substrings based on a specified separator. It takes a separator as an argument and returns an array of substrings. For example:

let str14 = "The quick brown fox jumps over the lazy dog.";
let words = str14.split(" "); // splitting the string into an array of words using space as a separator
console.log(words); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

//* The split() method is useful for breaking a string into smaller parts based on a specified separator, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? slice() : This method is used to extract a portion of a string and return it as a new string. It takes two arguments: the starting index and the ending index (optional). If the ending index is not provided, it extracts until the end of the string. For example:

let str15 = "The quick brown fox jumps over the lazy dog.";
let slicedStr = str15.slice(4, 9); // extracting a portion of the string from index 4 to 9
console.log(slicedStr); // "quick"

//* The slice() method is useful for extracting specific parts of a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.


//? toString() : This method is used to convert a string object to a primitive string. It returns the primitive string value of the string object. For example:

let strObj = new String("Hello, World!");
let primitiveStr = strObj.toString();
console.log(primitiveStr);

//* The toString() method is useful for converting string objects to primitive strings, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? valueOf() : This method is used to return the primitive value of a string object. It returns the primitive string value of the string object. For example:

let strObj2 = new String("Hello, World!");
let primitiveStr2 = strObj2.valueOf();
console.log(primitiveStr2);

//* The valueOf() method is useful for retrieving the primitive value of a string object, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? substring() : This method is used to extract a portion of a string and return it as a new string. It takes two arguments: the starting index and the ending index (optional). If the ending index is not provided, it extracts until the end of the string. For example:

let str16 = "The quick brown fox jumps over the lazy dog.";
let subStr = str16.substring(4, 9); // extracting a portion of the string from index 4 to 9
console.log(subStr); // "quick"

//* The substring() method is similar to the slice() method, but it does not allow for negative indices and it swaps the start and end indices if the start index is greater than the end index. It is useful for extracting specific parts of a string, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? trim() : This method is used to remove whitespace from both ends of a string. It does not modify the original string, but returns a new string with the whitespace removed. For example:

let str17 = "   Hello, Trim!   ";
console.log(str17); // "Hello, Trim!"
let trimmedStr = str17.trim();

console.log(trimmedStr); // "Hello, World!"

//* The trim() method is useful for cleaning up strings by removing unnecessary whitespace, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? The trimStart() method is used to remove whitespace from the beginning of a string. It does not modify the original string, but returns a new string with the whitespace removed. For example:

let str18 = "   Trim Start!   ";
let trimmedStartStr = str18.trimStart();

console.log(trimmedStartStr); // "Hello, World!   "

//* The trimStart() method is useful for cleaning up strings by removing unnecessary whitespace from the beginning, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

//? includes() : This method is used to determine whether a string contains a specified value. It takes a search value as an argument and returns true if the string contains the search value, and false otherwise. For example:

let str19 = "The quick brown fox jumps over the lazy dog.";
console.log(str19.includes("fox")); // true
console.log(str19.includes("cat")); // false

//* The includes() method is useful for checking if a string contains a specific value, and it can be used in combination with other string methods to manipulate and work with strings effectively in JavaScript.

