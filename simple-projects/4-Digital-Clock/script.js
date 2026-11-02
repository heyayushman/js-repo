// let hour = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// let time = `${hour} : ${min} : ${sec} ${midday}`;

let clock = document.querySelector('.clock-time');

//? toLocaleTimeString() - returns time

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString())
}, 1000);