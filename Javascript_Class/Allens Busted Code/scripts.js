let countdown;
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const timerDisplay = document.querySelector(".display_time-left");
const endTime = document.querySelector(".display_end-time");

document.addEventListener("DOMContentLoaded", function () {
  // Code to be executed when the DOM is ready

  const buttons = document.querySelectorAll("[data-time]");

  setDate();
  setInterval(setDate, 1000);
  buttons.forEach((button) => button.addEventListener("click", startTimer));
});

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();

  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;

  const minutes = end.getMinutes();

  endTime.textContent = `Be Back at ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;

  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//buttons.forEach(button => button.addEventListener('click', startTimer));

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //console.log(`hours: ${hours} minutes: ${minutes} seconds: ${seconds}`);
}