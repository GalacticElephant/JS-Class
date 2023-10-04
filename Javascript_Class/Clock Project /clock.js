const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const hoursDisplay = $("#hours");
  const minutesDisplay = $("#minutes");
  const secondsDisplay = $("#seconds");
  const ampmDisplay = $("#ampm");

  const formattedHours = padSingleDigit(hours % 12 || 12);
  const formattedMinutes = padSingleDigit(minutes);
  const formattedSeconds = padSingleDigit(seconds);

  hoursDisplay.textContent = formattedHours;
  minutesDisplay.textContent = formattedMinutes;
  secondsDisplay.textContent = formattedSeconds;
  ampmDisplay.textContent = ampm;
};

document.addEventListener("DOMContentLoaded", () => {
  /*this made me an unhappy boi*/
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
});
