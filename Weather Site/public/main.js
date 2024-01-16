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
          <div class="fields cityName">${cityName}</div>
          <div class="components">
            <div class="fields temp">${temperature}°C</div>
            <div class="fields">Description: ${description}</div>
            <div class="fields">Humidity: ${humidity}%</div>
            <div class="fields">Pressure: ${pressure} hPa</div>
            <img src="http://openweathermap.org/img/w/${icon}.png">
            </div> 
      `;

      weatherInfoContainer.innerHTML = weatherHTML;
  }
});
