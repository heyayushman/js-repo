const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
const dcHeroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman'];

// Accessing elements in the array
// console.log(marvelHeroes[0]); // Iron

// marvelHeroes.push(dcHeroes); // Adding Superman to the end of the marvelHeroes array

// console.log(marvelHeroes); 
// console.log(marvelHeroes[6][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes); // Merging both arrays into a new array

const heroesNew = [...marvelHeroes, ...dcHeroes]; //* Using the spread operator to merge both arrays into a new array
// console.log(heroesNew);

const newArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]];

const flatArray = newArray.flat(2); //* Using the flat() method to flatten the array to a depth of 2. Depth is the number of levels of nesting to flatten. The default is 1, which means it will only flatten one level of nested arrays. If you want to flatten all levels of nested arrays, you can use Infinity as the depth value.

// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]

const array = "Hello"

// console.log(Array.isArray(array)); // false //* The Array.isArray() method checks if the given value is an array. In this case, it returns false because "Hello" is a string, not an array.

console.log(Array.from(array)); //* ['H', 'e', 'l', 'l', 'o'] - Creates a new array from an array-like or iterable object. In this case, it creates an array from the string "Hello", where each character becomes an element in the new array.

console.log(Array.from({name: 'John'})); // false //* Creates a new array from an array-like or iterable object. In this case, it creates an array from the object {name: 'John'}, but since the object is not iterable, it returns an empty array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //* [100, 200, 300] - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments. In this case, it creates an array with the scores as elements.

//* Array.isArray() - Checks if the given value is an array. Returns true if it is an array, otherwise returns false.
//* Array.from() - Creates a new array from an array-like or iterable object. It can also take a mapping function as the second argument to modify the elements of the new array.
//* Array.of() - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.