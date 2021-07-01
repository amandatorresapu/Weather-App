let now = new Date();
let h2 = document.querySelector("h2");

let hours = now.getHours();

let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes} `;

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#name").innerHTML = response.data.name;
  document.querySelector("#tempature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "54a19520a091f37a82f561cb9de8d7b4";
  let city = document.querySelector("#search-city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let h5 = document.querySelector("h5");
  h5.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude} `;

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#button");
button.addEventListener("click", getCurrentPosition);
