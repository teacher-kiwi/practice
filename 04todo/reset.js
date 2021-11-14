const btn2 = document.querySelector(".js-btn");

function reset() {
    localStorage.removeItem('currentUser');
    
}

function init() {
    btn2.addEventListener("click", reset);
}

init();