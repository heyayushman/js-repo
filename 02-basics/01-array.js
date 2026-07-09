//? Array - In javascript, an array is a collection of items of different data types
//? Array is a special variable, which can hold more than one value at a time. It is a data structure that can store a fixed-size sequential collection of elements of the same type.

let arr = [1, 2, 3, 4, 5];
// console.log(arr)


//? Array Methods - In javascript, there are many built-in methods available to perform operations on arrays. Some of the most commonly used array methods are:
//? push() - Adds one or more elements to the end of an array and returns the new length of the array.

// arr.push(25);
// console.log(arr);

//? pop() - Removes the last element from an array and returns that element. This method changes the length of the array.

// arr.pop();
// console.log(arr)

//? shift() - Removes the first element from an array and returns that element. This method changes the length of the array.

// arr.shift()
// console.log(arr);

//? unshift() - Adds a first element in the array

// arr.unshift(8);
// console.log(arr)

//? indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(arr.indexOf(4));

//? includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(arr.includes(4));
// console.log(arr.includes(10));

//? length - Returns the number of elements in an array. Length is counted from 1, not from 0. The length property is always one more than the highest index in the array.

// console.log(arr.length);

//? reverse() - Reverses the order of the elements in an array. The first array element becomes the last, and the last array element becomes the first.
// arr.reverse();
// console.log(arr)

//? sort() - Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// arr.sort();
// console.log(arr)

//? splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// arr.splice(3, 2, 10, 11, 12);

//? The first parameter (3) specifies the index at which to start changing the array. The second parameter (2) specifies the number of elements to remove from the array. The third parameter (10) specifies the new element to add to the array.

console.log(arr)

//? slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

let newArr = arr.slice(1, 4);
console.log(newArr) // [2, 3, 4]

//? join() - Joins all elements of an array into a string and returns this string. The elements are separated by a specified separator string. If no separator is provided, the default separator is a comma (,).

let str = arr.join('-');
console.log(arr) // [1, 2, 3, 4, 5]
console.log(str) // 1-2-3-4-5