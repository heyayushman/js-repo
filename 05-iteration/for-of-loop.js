// for of: The for...of loop iterates over the values of iterable objects such as arrays, strings, Maps, Sets, and NodeLists.


// ["", "", ""]
// [{}, {}, {}]

const myArr = [1, 2, 3, 4, 5];

for (const x of myArr) {
    // console.log(x);
}

// let myArr2 = ["Mon", "Tue", "Wed"];
// for (const val of myArr2) {
//     console.log(val);
// }

// let greeting = "Hello World !";
// for(const greet of greeting){
//     if(greet == " "){
//         continue;
//     }
//     console.log(`Each character is ${greet}`);

// }

//? Maps: A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.

//* Maps differ from standard objects in that keys can be of any data type.

//create a map
const fruits = new Map([
    ["apple", 500],
    ["bananas", 400],
    ["oranges", 200]
]);

//? Map.get(): You get the value of a key in a map with the get() method

// console.log(fruits.get("apple"));

//? Map.set(): You can add elements to a map with the set() method:
fruits.set("mango", 600);

//? The set() method can also be used to change existing map values:
fruits.set("pineapple", 700);
fruits.set("pineapple", 500);
// console.log(fruits);

//? Map.size: The size property returns the number of elements in a map:
// console.log(fruits.size);

//? Map.delete(): The delete() method removes a map element:
// fruits.delete("apple");
// console.log(fruits);

//?Map.clear(): The clear() method removes all the elements from a map:
// fruits.clear();
// console.log(fruits);

//? Map.has(): The has() method returns true if a key exists in a map:
// console.log(fruits.has("apple"));

//? Map.forEach(): The forEach() method invokes a callback for each key/value pair in a map:

// fruits.forEach((value, key)=> {
//     console.log(`${key} = ${value} `)
// })

//? Map.entries(): The entries() method returns an iterator object with the [key,values] in a map:
// for(const x of fruits.entries()){
//     console.log(x);
// }

//? Map.keys(): The keys() method returns an iterator object with the keys in a map:
// for(const x of fruits.keys()){
//     console.log(x);
// }

//? Map.values(): The values() method returns an iterator object with the values in a map:
// for(const x of fruits.values()){
//     console.log(x);
// }

//* You can use the values() method to sum the values in a map:
// let total = 0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);

//***************************************************************************** */

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('JPN', "Japan");
map.set('FR', "France");
map.set('JPN', "Japan");

// console.log(map);

// for(const key of map){
//     console.log(key);
// }

//? To get key and value pair, square bracket can be used
// for(const [key, value] of map){
//     console.log(key,': ', value);
// }

const myObj = {
    name: "Vik",
    age: 25,
    profession: "Student"
}

//? for..of does not work for Objects
// for(const key of myObj){
//     console.log(`${key}: ${myObj[key]}`);
// }

