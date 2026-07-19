//forEach loop:

const myArr = ["JS", "Java", "C++", "Python"];

// myArr.forEach((item) => {
//     console.log(item);
// })

// function printItem(item){
//     console.log(item);
// }

// myArr.forEach(printItem);

// myArr.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

const programmingLanguage = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  }
];

programmingLanguage.forEach((element) => {
    console.log(element.languageName);
})