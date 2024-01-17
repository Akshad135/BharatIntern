// // public/main.js
// document.addEventListener('DOMContentLoaded', function () {
//   let input = document.querySelector('.input');
//   input.addEventListener('keypress', function(e) {
//       if (e.key === 'Enter') {
//           let cityName = e.target.value;
//           const apiUrl = `/weather?city=${cityName}`;

//           fetch(apiUrl)
//               .then(response => response.json())
//               .then(data => {
//                   displayWeather(data);
//               })
//               .catch(error => {
//                   console.error('Error fetching weather data:', error);
//               });
//       }
//   });

//   function displayWeather(weatherData) {
//       const weatherInfoContainer = document.getElementById('weather-info');

//       const cityName = weatherData.name;
//       const temperature = Math.round(weatherData.main.temp - 273.15);
//       const description = weatherData.weather[0].description;
//       const humidity = weatherData.main.humidity;
//       const visibility = weatherData.visibility;
//       const pressure = weatherData.main.pressure;
//       const windSpeed = weatherData.wind.speed;
//       const icon = weatherData.weather[0].icon;

//       const weatherHTML = `
//           <div class="fields cityName">${cityName}</div>
//           <div class="separator"></div>
//           <div class="fields temp-dsc">${temperature}°C | ${description} </div>
//           <div class="components">
//             <div class="component-text">
//                 <div class="fields">Humidity: ${humidity}%</div>
//                 <div class="fields">Visibility: ${visibility} km</div>
//                 <div class="fields">Pressure: ${pressure} hPa</div>
//                 <div class="fields">Wind Speed: ${windSpeed} km/hr</div>
//             </div>
//             <div class="cpmponent-img">
//                 <img src="http://openweathermap.org/img/w/${icon}.png" class="img" height=150px width=150px>
//             </div>
//           </div> 
//       `;

//       weatherInfoContainer.innerHTML = weatherHTML;
//   }
// });

// public/main.js
document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('.input');
    let searchIcon = document.querySelector('.icon'); // Assuming you have a search icon element
  
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            fetchWeatherData();
        }
    });
  
    searchIcon.addEventListener('click', function () {
        fetchWeatherData();
    });
  
    function fetchWeatherData() {
        let cityName = input.value;
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
  
    function displayWeather(weatherData) {
        const weatherInfoContainer = document.getElementById('weather-info');
        const cityName = weatherData.name;
        const temperature = Math.round(weatherData.main.temp - 273.15);
        const description = weatherData.weather[0].description;
        const humidity = weatherData.main.humidity;
        const visibility = weatherData.visibility;
        const pressure = weatherData.main.pressure;
        const windSpeed = weatherData.wind.speed;
        const icon = weatherData.weather[0].icon;

        const weatherHTML = `
            <div class="fields cityName">${cityName}</div>
            <div class="separator"></div>
            <div class="fields temp-dsc">${temperature}°C | ${description} </div>
            <div class="components">
                <div class="component-text">
                    <div class="fields">Humidity: ${humidity}%</div>
                    <div class="fields">Visibility: ${visibility/1000} km</div>
                    <div class="fields">Pressure: ${pressure} hPa</div>
                    <div class="fields">Wind Speed: ${windSpeed} km/hr</div>
                </div>
                <div class="cpmponent-img">
                    <img src="http://openweathermap.org/img/w/${icon}.png" class="img" height=150px width=150px>
                </div>
            </div> 
        `;
        
  
        weatherInfoContainer.innerHTML = weatherHTML;
    }
  });
  