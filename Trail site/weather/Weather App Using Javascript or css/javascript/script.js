async function getData() {
    var inputVal = document.getElementById("searchTxt").value;

    const res = await fetch(
        "https://weatherapi-com.p.rapidapi.com/current.json?q=q=" + inputVal, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "4f8234a62amsh42185b0b78f249cp12e57ajsnb401d01fcbbf",
            },
        }
    );

    const data = await res.json();

    // Update the background image based on weather conditions
    updateBackgroundImage(data.current.condition.text);

    // Update the temperature units based on the toggle
    const isCelsius = document.getElementById("unitToggle").checked;
    document.getElementById("temperatureC").innerText =
        isCelsius ? data.current.temp_c + " °C" : "";
    document.getElementById("temperatureF").innerText =
        isCelsius ? "" : data.current.temp_f + " °F";

    document.getElementById("location").innerText = data.location.name;
    document.getElementById("locationParts").innerHTML = "<i class='bi bi-geo-alt'></i> " +
        data.location.region + " , " + data.location.country;
    document.getElementById("dateTime").innerHTML = "<i class='bi bi-calendar'></i> " +
        data.location.localtime.substr(0, 10);
    document.getElementById("txtWord").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    document.getElementById("precipitation").innerText =
        "Precipitation: " + data.current.precip_mm + "%";
    document.getElementById("wind").innerText =
        "Wind: " + data.current.wind_kph + "km/h";
    document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;
}

// Add a function to update the background image
function updateBackgroundImage(weatherCondition) {
    const body = document.body;
    const backgroundImageMap = {
        "Sunny": "sunny.jpg",
        "Cloudy": "cloudy.jpg",
        "Rain": "rain.jpg",
        // Add more conditions and corresponding image filenames here
    };

    const defaultImage = "default.jpg"; // Provide a default image
    const imageFileName = backgroundImageMap[weatherCondition] || defaultImage;

    body.style.backgroundImage = `url('C:\Users\arvin\Downloads\weather\Weather App Using Javascript or css\img'/${imageFileName}')`;
}

// Add an event listener for the temperature unit toggle
document.getElementById("unitToggle").addEventListener("change", () => {
    getData(); // Re-fetch and update the data when the unit is toggled
});

// Rest of your code...

// Function to get the day of the week
function getWeekDay() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("weekDay").innerText = day;
}

// Add an event listener for the search button
document.getElementById("searchButton").addEventListener("click", () => {
    getData(); // Fetch weather data when the search button is clicked
    getWeekDay(); // Get the day of the week
});

// Initialize the app with default data
getData();
getWeekDay();
