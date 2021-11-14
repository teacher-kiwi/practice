const body = document.querySelector("body");

const IMG_NUMBER = 5;

function SHOWING(){
    const img = document.querySelector("img");
    img.classList.remove("form");
    console.log("finished");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    image.classList.add("form");
    body.appendChild(image);
    image.addEventListener("load", SHOWING);
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();