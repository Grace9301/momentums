'use strict';

const clock = document.querySelector('.clock');

function getClock() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  clock.innerHTML = `<b>${hours}:${minutes}:${seconds}</b>`;
}

getClock();
setInterval(getClock, 1000);
