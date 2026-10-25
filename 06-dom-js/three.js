const div = document.createElement('div');
console.log(div)

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute('title', 'simple code');
div.style.color = 'cyan';
div.style.fontSize = '25px';
div.style.padding = '15px';

// div.innerText = "Tom & Jerry";

const addText = document.createTextNode("JavaScript");
div.appendChild(addText)

document.body.appendChild(div);