const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    
    switch(e.target.id){
      case 'grey': body.style.backgroundColor = 'grey';
      break;
      case 'black': body.style.backgroundColor = 'black'
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