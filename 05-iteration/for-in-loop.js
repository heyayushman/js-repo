//? for..in : Helps iterating in Objects
const myObj = {
  JS: "JavaScript",
  py: "Python",
  Rb: "Ruby",
  cpp: "C++",
};

// for(const key in myObj){
//     console.log(`${key}: ${myObj[key]}`);
// }

const myArr = ["JS", "Java", "C++", "Python"];
for (const val in myArr) {
  // console.log(myArr[val]);
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "Bangalore",
};

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }


//? for..of cannot be used in Objects directly, instead we can convert an object into an array by using Object methods such Object.keys(), Object.values(), Object.entries() etc

// const personKeys = Object.keys(person);
// const personValues = Object.values(person);
// const personEntries = Object.entries(person);

// console.log(personEntries);
// for(const key of personKeys){

//* The map() method creates a new array by performing a function on each array element.
//* The map() method does not execute the function for array elements without values.
//* The map() method does not change the original array.

//     console.log(key,": " , person[key]);
// }
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('JPN', "Japan");
map.set('FR', "France");
map.set('JPN', "Japan");

// for(const [key, value] of map){
//     console.log(key, value);
// }


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.map((item) => {
  return item * 2;
}).map((item) => item + 10).filter((item) => item > 15);

// console.log(newNum);


//chaining

const newNum2 = myNum
                      .map((item) => item * 2)
                      .filter((item) => item > 10);
// console.log(newNum2);

//! reduce() method:
//* The reduce() method executes a reducer function (that you provide) on each element of the array which produces a single value.
//* The reduce() method does not execute the function for empty array elements.
//* The reduce() method does not change the original array.


//? syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//total all the numbers in an array (initialValue is optional/ the initial value / previously returned value)
//currentValue is the current element being processed in the array
//currentIndex is the index of the current element being processed in the array
//arr is the array reduce() was called upon


// ? Example:
const numbers = [16, 45, 9, 4, 25];

let initialValue = 100;
// let initialValue = 1000;
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// let sum = numbers.reduce(myFunc, initialValue);


// function myFunc(accumulator, currentValue) {
//   // console.log(accumulator, currentValue, currentIndex, arr);
//   console.log(`acc: ${accumulator}, curr: ${currentValue}`);
//   return accumulator + currentValue;
// }

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const cartTotal= shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartTotal);