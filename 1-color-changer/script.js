const body = document.querySelector('body');
const btn = document.querySelectorAll('.button')

btn.forEach((b) => {
  b.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);

    switch(e.target.id){
      case 'grey': body.style.backgroundColor = 'grey';
      break;
      case 'yellow': body.style.backgroundColor = 'yellow';
      break;
      case 'orange': body.style.backgroundColor = 'orange';
      break;
      case 'violet': body.style.backgroundColor = 'violet';
      break;
    }
  })
})