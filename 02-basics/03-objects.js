//* objects : Objects are collections of key-value pairs. They are used to store and organize data in a structured way. In JavaScript, objects can be created using curly braces {} and can contain properties and methods.

//* Properties : Properties are the key-value pairs that make up an object. The key is a string that represents the name of the property, and the value can be any data type, including other objects or functions.

//* Methods : Methods are functions that are associated with an object. They can be used to perform actions on the object's properties or to return information about the object.

//* Object Literal : An object literal is a way to create an object using curly braces {} and defining its properties and methods inside. For example:

const user = {
  name: "John Doe",
  age: 30,
  email: "example@mail.com",
};

//* An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

// let text = JSON.stringify(user)
// console.log(text)


// console.log(user); //* { name: 'John Doe', age: 30, email: '}

user.address = "123 Main St"; //* Adding a new property to the object
// console.log(user); //* { name: 'John Doe', age: 30, email: '}


//!Object Properties
//? Object Properties can be accessed in two different ways
//* Add, change, and delete properties using assignment and delete

// console.log("User name : ", user.name, "(Dot Operator)"); //* Dot Notation
// console.log("User name : ", user["name"], "(Bracket Operator)"); //* Bracket Notation

//! You can also create an empty object, and add the properties later:

const Person = {};

Person.name = "Jane Doe";
Person.age = 25;
Person.email = "ex@mail.co.in";

// console.log(Person); //* { name: 'Jane Doe', age: 25, email: '}


//* Object.keys() : This method returns an array of the object's own enumerable property names (keys). For example:

const keys = Object.keys(user);
// console.log(keys); //* [ 'name', 'age', 'email', 'address' ]

//* Object.values() : This method returns an array of the object's own enumerable property values. 
//* For example:

const values = Object.values(user);
// console.log(values); //* [ 'John Doe', 30, 'example@mail.com', '123 Main St' ]

//* Object.entries() : This method returns an array of the object's own enumerable property [key, value] pairs. 
//* For example:
const entries = Object.entries(user);
// console.log(entries)

//! Deleting Properties
//* The delete keyword deletes a property from an object:
const myObject = {
    name : "Leo",
    age : 28,
    myCars : {
        car1 : "Ford",
        car2 : "BMW",
        car3 : "Toyota"
    }
}

// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.myCars.car1);
// delete myObject.age;
// console.log(myObject.age);

//? You can access nested objects using the dot notation or the bracket notation:

let p1 = "myCars"
let p2 = "car2"
// console.log(myObject[p1][p2])
//! JavaScript Object Methods
//* Objects can also have methods. Object methods are actions that can be performed on objects. Object methods are function definitions stored as property values:

const person2 = {
    firstName : "Brendan",
    lastName : "Eich",
    age : 26,
    fullName : function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }  //* In an object method, this refers to the object.
};
//? The this Keyword
//* In an object method, this refers to the object.

let fullName = person2.fullName()
// console.log(fullName)

//* In the example above, this refers to the person object.
//* this.firstName means the firstName property of the person object.
//* this.lastName means the lastName property of the person object.

//? You can add methods to objects by assigning a function to a property

let person3 = {
    firstName3 : "Cherie",
    lastName3 : "Lewis"
}
person3.name = function () {
    
  return (this.firstName3 + " " + this.lastName3).toUpperCase(); 
  //* This example uses the JavaScript toUpperCase() method to convert a text to uppercase:
};

// console.log(person3.name())


//? Hitesh Chaudhary


//* defining a symbol
const mySym = Symbol("key10");

let myPersonalObject = {
    name : "Noorain",
    [mySym]: "my_key1",
    age : 19,
    "fullName" : "Noorain Fatima"
}

// console.log(myPersonalObject["fullName"])
// //* printing symbol
// console.log(myPersonalObject[mySym])


//? we can freeze the objects which we don't want to change
Object.freeze(myPersonalObject);

myPersonalObject.age = 25;
console.log(myPersonalObject) //* age = 26 (value does not change)

