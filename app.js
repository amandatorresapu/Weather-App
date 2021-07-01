let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let year = now.getFullYear();
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

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-text-input");

  let h3 = document.querySelector("h3");
  if (input.value) {
    h3.innerHTML = `The weather in ${input.value} is:`;
  } else {
    h3.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "54a19520a091f37a82f561cb9de8d7b4";
let city = "merced";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;

function showTempature(response) {
  console.log(response.data);
  let tempature = Math.round(response.data.main.temp);
  let tempatureElement = document.querySelector("#tempature");
  tempatureElement.innerHTML = `${tempature}'F`;
}

axios.get(`${apiURL}&appid=${apiKey}`).then(showTempature);
