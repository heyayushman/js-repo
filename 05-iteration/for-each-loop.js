//forEach loop:

const myArr = ["JS", "Java", "C++", "Python"];


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! filter() method:
//* The filter() method creates a new array filled with elements that pass a test provided by a function.
//* The filter() method does not execute the function for empty elements.
//* The filter() method does not change the original array.

// const num = myNum.filter((item) => {
//   return item > 4;
// })


// const newNum = [];
// myNum.forEach((item) => {
//   if(item > 4) {
//     newNum.push(item);
//   }
// })
// console.log(newNum);


// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(result);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // const userBooks = books.filter((bk) => {
  //   return bk.genre === "History";
  // })


  // const userBooks = books.filter((bk) => bk.publish > 2000);

  const userBooks = books.filter((bk) => { return bk.edition > 2010});
  console.log(userBooks);

const lang = myArr.forEach((item) => {
  // console.log(item);
})

// console.log(lang);

// function myFunc(item, index, arr) {
//   console.log(item);
// }


// myArr.forEach(myFunc);


// myArr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })


const myCoding = [
  {language: "JavaScript",
  framework: "React",
  library: "Redux",
  version: "ES6"},
  {
    language: "Python",
    framework: "Django",
    library: "NumPy",
  },
  {
    language: "Java",
    framework: "Spring",
    library: "Hibernate",
  }
]


// myCoding.forEach((item, index) => {
//   console.log(item.language, item.framework, item.library);
// })