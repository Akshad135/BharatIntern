// public/main.js
document.addEventListener('DOMContentLoaded', function () {
  let input = document.querySelector('.input');
  input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          let cityName = e.target.value;
          const apiUrl = `/weather?city=${cityName}`;

          fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                  displayWeather(data);
              })
              .catch(error => {
                  console.error('Error fetching weather data:', error);
              });
      }
  });

  function displayWeather(weatherData) {
      const weatherInfoContainer = document.getElementById('weather-info');

      const cityName = weatherData.name;
      const temperature = Math.round(weatherData.main.temp - 273.15);
      const description = weatherData.weather[0].description;
      const humidity = weatherData.main.humidity;
      const pressure = weatherData.main.pressure;
      const icon = weatherData.weather[0].icon;

      const weatherHTML = `
          <p class="fields">City: ${cityName}</p>
          <p class="fields">Temperature: ${temperature}°C</p>
          <p class="fields">Description: ${description}</p>
          <p class="fields">Humidity: ${humidity}%</p>
          <p class="fields">Pressure: ${pressure} hPa</p>
          <img src="http://openweathermap.org/img/w/${icon}.png">
      `;

      weatherInfoContainer.innerHTML = weatherHTML;
  }
});
