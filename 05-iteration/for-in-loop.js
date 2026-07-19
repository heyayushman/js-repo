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
//     console.log(key,": " , person[key]);
// }
// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States Of America");
// map.set('JPN', "Japan");
// map.set('FR', "France");
// map.set('JPN', "Japan");

// for(const key in map){
//     console.log(key);
// }
