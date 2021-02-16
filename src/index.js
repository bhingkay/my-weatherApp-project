function showDetails(response) {
  console.log(response);
  let showCityElement = document.querySelector("#show-city");
  let showUnitElement = document.querySelector("#unit");
  let showDetails = document.querySelector("#show-detail");
  let showHumidity = document.querySelector("#show-humidity");
  let showWind = document.querySelector("#show-wind");
  let windSpeed = Math.round(response.data.wind.speed);

  showCityElement.innerHTML = response.data.name;
  showUnitElement.innerHTML = Math.round(response.data.main.temp);
  showDetails.innerHTML = response.data.weather[0].description;
  showHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  showWind.innerHTML = `Wind: ${windSpeed} km/h`;
}

function searchCity(city) {
  // if (city !== "") {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showDetails);
  //} else {
  //  alert("Please type a city...");
  //}
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  //let city = cityInput.value;
  searchCity(city);
}

function showLocation(position) {
  console.log(position);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(url).then(showDetails);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("submit", search);

let currentBtn = document.querySelector("#current-location-button");
currentBtn.addEventListener("click", getLocation);

searchCity("New York");
