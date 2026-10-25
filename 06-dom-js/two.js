const parent = document.querySelector('.main');
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[1].innerHTML)

// for(let i = 0; i < parent.children.length; i++){
//     let element = parent.children[i].innerHTML;
//     console.log(element);
// }

parent.children[1].style.color = 'red';
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)


const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("Nodes: ", parent.childNodes)