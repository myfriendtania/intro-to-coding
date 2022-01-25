const URL = "https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=88723180e3c19e3235dfaf41df75b619&units=imperial"

const sectionElement = document.querySelector('section');

fetch(URL)
.then(response => response.json())
  .then(data => {
    sectionElement.innerHTML = `
    <h2>Current Weather for Dallas, TX</h2>
    <p>75201</p>
    <p>Current Temperature: ${data.main.temp}</p>
    <p> How's the sky looking? ${data.weather[0].description}</p>
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
     `
  })
 
