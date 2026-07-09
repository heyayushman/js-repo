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

console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]