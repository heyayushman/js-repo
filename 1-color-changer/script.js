const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

// console.log(buttons)
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    switch(e.target.id){
      case 'grey': body.style.backgroundColor = 'grey';
      break;
      case 'black': body.style.backgroundColor = 'black';
      body.style.color = 'white';
      break;
      case 'blue': body.style.backgroundColor = 'blue';
      break;
      case 'yellow': body.style.backgroundColor = 'yellow';
      break;
      case 'purple': body.style.backgroundColor = 'purple';
      break;
    }
  })
})

// const btn2 = document.querySelector(".button2");

// btn2.addEventListener("click", (e) => {
//   if (e.target.id === "change") {
//     // const r = Math.round(Math.random() * 255);
//     // // console.log(r)
//     // const g = Math.round(Math.random() * 255);
//     // // console.log(g)
//     // const b = Math.round(Math.random() * 255);
//     // // console.log(b)
//     // console.log(r, g, b);
    
//     const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     console.log(randomHex);
//     body.style.backgroundColor = randomHex;
//   }
// });
