// document.getElementById("myButton").addEventListener("click", function() {
//     var newElement = document.createElement("p");
//     newElement.textContent = "This is a new paragraph added to the DOM.";
//     document.body.appendChild(newElement);
// });


const title = document.getElementById("title");
const heading = document.getElementsByClassName("heading");

const myUL = document.querySelector('ul');
const listItems = myUL.querySelectorAll('li');

title.style.color = "violet";


const tempList = document.querySelectorAll('li');


const tempClassList = document.getElementsByClassName('list-item');
const myConvertedList = Array.from(tempClassList);

myConvertedList.forEach((li) => {
    li.style.color = 'cyan';
})