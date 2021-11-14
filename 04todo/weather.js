const weather = document.querySelector(".js-weather");

const API_KEY = "284ec2b148a72a61795ba16c7a6f7fbb";

const COORDS = "coords";

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            console.log(json);
            const temp = json.main.temp;
            const place = json.name;
            const country = json.sys.country;
            const icon = json.weather[0].icon;
            weather.innerHTML = `${temp}℃ <img  style="vertical-align:middle" src="https://openweathermap.org/img/w/${icon}.png" /> @ ${place} in ${country}`;

        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("위치 정보를 불러올 수 없습니다.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();