const apiKey = "eea7949f6c05453689d170638240404";
const weatherInfo = document.querySelector(".weather-info");
const listWeatherForecast = document.querySelector(".list-weather-forecast");

const getWeatherInfo = async (city) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        if(!response.ok){
            throw new Error("Ha surgido un error", response.status);
        };

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al obtener los datos", error);
    };
};

function updateWeatherInfo(data) {
    let divCityWeather = document.createElement("div");
    divCityWeather.classList.add("city-weather");

    let location = document.createElement("p");
    location.innerHTML = `${data.location.name}, ${data.location.country}`

    let weatherStatus = document.createElement("div");
    weatherStatus.classList.add("weather-status");

    let textStatus = document.createElement("p");
    textStatus.innerHTML = data.current.condition.text;

    let imgStatus = document.createElement("img");
    imgStatus.src = data.current.condition.icon;
    imgStatus.alt = `Icono de: ${data.current.condition.text}`;

    weatherStatus.appendChild(textStatus);
    weatherStatus.appendChild(imgStatus);

    divCityWeather.appendChild(location);
    divCityWeather.appendChild(weatherStatus);

    let meteorology = document.createElement("div");
    meteorology.classList.add("meteorology");

    let divDegrees = document.createElement("div");
    divDegrees.classList.add("div-degrees");

    let pDegrees = document.createElement("p");
    let iconDegrees = document.createElement("img");
    iconDegrees.classList.add("icon-degrees");
    pDegrees.innerHTML = data.current.temp_c;
    iconDegrees.src = "assets/img/icons/statusWeatherIcon.png";
    iconDegrees.alt = "Degrees icon";
    divDegrees.appendChild(pDegrees);
    divDegrees.appendChild(iconDegrees);

    let divConditions = document.createElement("div");
    divConditions.classList.add("conditions");

    let pPrecipitation = document.createElement("p");
    let pHumidity = document.createElement("p");
    let pWind = document.createElement("p");

    pPrecipitation.innerHTML = `Precipitaciones: ${data.current.precip_mm} mm`;
    pHumidity.innerHTML = `Humedad: ${data.current.humidity} %`;
    pWind.innerHTML = `Viento: ${data.current.wind_kph} km/h`;
    divConditions.appendChild(pPrecipitation);
    divConditions.appendChild(pHumidity);
    divConditions.appendChild(pWind);

    meteorology.appendChild(divDegrees);
    meteorology.appendChild(divConditions);

    weatherInfo.appendChild(divCityWeather);
    weatherInfo.appendChild(meteorology);
;}

function weatherHours(data) {
    const forecast = data.forecast.forecastday[0].hour;

    forecast.forEach(weatherHour =>{
        const li = document.createElement("li");
        
        const hour = weatherHour.time.split(" ")[1];
        const icon = weatherHour.condition.icon;
        const iconAlt = `Icono de: ${weatherHour.condition.text}`;
        const degrees = `${weatherHour.temp_c} °C`;

        const pHour = document.createElement("p");
        pHour.innerHTML = hour;

        const imgIcon = document.createElement("img");
        imgIcon.src = icon;
        imgIcon.alt = iconAlt;

        const pDegrees = document.createElement("p");
        pDegrees.innerHTML = degrees;

        li.appendChild(pHour);
        li.appendChild(imgIcon);
        li.appendChild(pDegrees);
        listWeatherForecast.appendChild(li);
    });
};

getWeatherInfo("Alicante, Spain").then(data => {
    updateWeatherInfo(data);
    weatherHours(data);
});
