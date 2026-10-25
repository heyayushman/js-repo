function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;

    document.querySelector('.language').appendChild(li);
}

addLanguage("Python")
addLanguage("Java")

function addOptimizeLanguage(langName){
    const li = document.createElement('li');
    const addText = document.createTextNode(langName);
    li.appendChild(addText);

    document.querySelector('.language').appendChild(li);
}


addOptimizeLanguage("Go Lang");



//? Edit Values
const secondLang = document.querySelector("li:nth-child(2)");

console.log(secondLang)
// secLang.innerHTML = 'Zepto';


const newLi = document.createElement('li');
newLi.textContent = 'Zomato';


secondLang.replaceWith(newLi)


const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML =  '<li>TypeScript</li>';


//? Remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();



// function createList(addList){
//     const ol = document.createElement('ol');
//     ol.setAttribute('class', 'orderedList');

//     const li = document.createElement('li');
//     li.innerHTML = `${addList}`;

//     ol.appendChild(li);

//     document.body.appendChild(ol);



// }

// createList('Desktop')
// createList('Mouse')

// const ol = document.createElement('ol');
//     ol.setAttribute('class', 'orderedList');


//     const li = document.createElement('li');
//     li.innerHTML = 'Language';

//     ol.appendChild(li)

//     document.body.append(ol);

//     console.log(ol)