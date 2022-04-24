'use strict';

const API_KEY = 'f24177f5fa80c5fd9c147afbb417bf0a';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('.city');
      const weather = document.querySelector('.localWeather');
      const temperature = document.querySelector('.temperature');
      const wind = document.querySelector('.wind');
      city.innerText = data.name;
      weather.innerText = data.name;
      const tempInt = data.main.temp;
      temperature.innerText = `${Math.floor(tempInt)}°C`;
      wind.innerText = data.wind.speed;
    });
}
function onGeoError() {
  alert('Error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
