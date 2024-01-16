const apiKey = 'cfda8673262b304bd0ae24055e2a2ffd';

function getWeather() {
  const cityInput = document.getElementById('cityInput').value;

  if (cityInput === '') {
    alert('Please enter a city');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
      } else {
        displayWeather(data);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function displayWeather(data) {
  const weatherResult = document.getElementById('weather-info');

  const temperature = (data.main.temp - 273.15).toFixed(2); 
  const description = data.weather[0].description;

  const html = `
    <p>Temperature: ${temperature} °C</p>
    <p>Description: ${description}</p>
  `;

  weatherResult.innerHTML = html;
}