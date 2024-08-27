const apikey = "9ba6ea64a898194ef4ab39a4353fd008";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let icon = document.getElementById("icon");

async function checkWeather(city) {
  let response = await fetch(api + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById("weather").style.display = "none";
  } else {
    let data = await response.json();

    console.log(data);
    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "images/snow.png";
    } else if (data.weather[0].main == "Wind") {
      icon.src = "images/wind.png";
    }

    document.getElementById("error").style.display = "none";
    document.getElementById("weather").style.display = "block";
  }
}

const city = document.getElementById("name");

document.getElementById("search").addEventListener("click", () => {
  checkWeather(city.value);
});
