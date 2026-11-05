//? The core difference is that setTimeout executes a function only once after a specified delay,
//? whereas setInterval executes a function repeatedly at fixed time intervals. Both are asynchronous methods provided by the host environment.

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let intervalId = null;

startBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    console.log("Interval started");
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("Interval stopped");
});
