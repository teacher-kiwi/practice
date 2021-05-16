const display = document.querySelector("#display"),
    conter = document.querySelector("#counter");

const tryForm = document.querySelector("#try");
const checkBtn = document.querySelector("#check");

const answer = Math.floor(Math.random() * 100) + 1;
let countNum = 0;

checkBtn.addEventListener("click", () => {
    if(tryForm.value > answer){
        display.innerText = "DOWN!"
    } else if(tryForm.value < answer){
        display.innerText = "UP!"
    } else {
        display.innerText = "정답입니다!"
        console.log("정답:",answer);
    }
    
    countNum += 1;
    counter.innerText = `${countNum}번째 시도`;
    tryForm.select();
});