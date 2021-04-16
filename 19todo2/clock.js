const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const _date = new Date();
    const year = _date.getFullYear();
    const month = _date.getMonth();
    const date = _date.getDate();
    const day = _date.getDay();
    const weekday = ['일', '월', '화', '수', '목', '금', '토'];
    const hours = _date.getHours();
    const minutes = _date.getMinutes();
    const seconds = _date.getSeconds();
    
    clockTitle.innerText = `${year}. ${month}. ${date}.(${weekday[day]})
        ${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();