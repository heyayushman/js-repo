const body = document.querySelector('body');
const btn = document.querySelector('.button');


btn.addEventListener('click', (e) => {
    // console.log(e.target);

    const randomHex = '#' +  Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');

    body.style.backgroundColor = randomHex;

    console.log(randomHex);
})