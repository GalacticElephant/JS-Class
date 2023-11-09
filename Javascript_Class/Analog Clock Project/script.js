function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
  
    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + 90 + (seconds / 60) * 6;
    const hourDeg = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30;
  
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  
  