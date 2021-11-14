const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    btn = document.querySelector(".js-btn");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    btn.classList.remove("btn");
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}님 좋은 하루 보내세요.`
}

function reset() {
    localStorage.removeItem('currentUser');
    location.reload();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
        btn.addEventListener("click", reset);
    } else {
        paintGreeting(currentUser);        
        btn.addEventListener("click", reset);
    }
}

function init() {
    loadName();
}

init();