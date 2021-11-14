"use strict";

const numWrap = document.querySelector(".numWrap");
const numOne = document.querySelector(".numOne");
const numTwo = document.querySelector(".numTwo");
const numThree = document.querySelector(".numThree");
const btn = document.querySelector(".btn");
const checklist = document.querySelector(".checklist");
const numpadWrap = document.querySelector(".numpad-wrap");
const numInput = document.querySelectorAll(".numInput");
const numBtn = document.querySelectorAll(".num-btn");

let count = 0;
let selBtn;

// 랜덤으로 서로 다른 수 3개 만들기
const makeRandomNum = () => {
    const ranNum1 = Math.floor(Math.random() * 9 + 1);
    const ranNum2 = Math.floor(Math.random() * 9 + 1);
    const ranNum3 = Math.floor(Math.random() * 9 + 1);

    return ((ranNum1 === ranNum2 || ranNum2 === ranNum3) || ranNum1 === ranNum3) ? makeRandomNum() : [ ranNum1, ranNum2, ranNum3 ];
};

// 입력된 수의 이상 여부 판단하기
const numCheck = (num1, num2, num3) => {
    let check = 0;
    for (let i = 1; i < 10; i++) {
        if (num1 === i) check++;
        else if (num2 === i) check++;
        else if (num3 === i) check++;
    }
    return check;
}

// 버튼 핸들러(입력된 수가 이상이 없으면 결과 확인)
const handleCheck = (ranNum) => {
    if (btn.value === "다시하기") return location.reload(); //새로고침

    const num1 = parseInt(numOne.value);
    const num2 = parseInt(numTwo.value);
    const num3 = parseInt(numThree.value);
    
    numOne.value = "?";
    numTwo.value = "?";
    numThree.value = "?";

    if (numCheck(num1, num2, num3) !== 3){
        return alert("1~9의 숫자를 서로 다르게 입력하세요.");
    } else {
        return checkResult([num1, num2, num3], ranNum);
    }   
};

// 입력된 수와 정답을 비교하여 결과 출력
const checkResult = (num, ranNum) => {
    count++;
    let strike = 0, ball = 0;
    for (let i = 0; i < 3; i++) {
        if (num.includes(ranNum[i])) {
            ball++;
        }
        if(num[i]===ranNum[i]) {
            ball--;
            strike++;
        }
    }
    if (count === 9) {
        btn.value = "다시하기";
        paintResult(`${count}회 [${num}] : ${strike}S ${ball}B`);
        paintResult(`게임에서 졌습니다. 다시 해보세요.`);
    } else if (strike === 3) {
        btn.value = "다시하기";
        paintResult(`${count}회 [${num}] : ${strike}S ${ball}B`);
        paintResult(`게임에서 이겼습니다. 축하합니다.`);
    } else {
        paintResult(`${count}회 [${num}] : ${strike}S ${ball}B`);
    }
}

// 확인된 결과를 출력하는 함수
const paintResult = (text) => {
    const result = document.createElement("li");
    result.innerText = text;
    checklist.appendChild(result);    
};


// 숫자패드 보이기
const openNumpad = (event) => {
    selBtn = event.target;
    numpadWrap.classList.remove("invisible");
};

// 숫자 입력
const insertNum = (event) => {
    const selNum = event.target.value;
    selBtn.value = selNum;
    numpadWrap.classList.add("invisible");
}

// 창이 열리면 실행되는 함수
const init = () => {
    const ranNum = makeRandomNum();
    console.log(ranNum);
    btn.addEventListener("click", () => {handleCheck(ranNum)});
    paintResult("1~9의 서로 다른 3개의 숫자를 맞춰보세요!");
    
    for(let i = 0; i < numInput.length; i++) {
        numInput[i].addEventListener("click", openNumpad);
    }
    for(let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", insertNum);
    }
};

init();