const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let body = document.querySelector("body");
const stopped = document.querySelector('.demo');

let intervalId = null;

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
        const randomHexColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

        body.style.backgroundColor = randomHexColor;
         stopped.innerHTML = "";
        // console.log(randomHexColor);
    }, 100);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;

  stopped.innerHTML = "Interval stopped";
});
