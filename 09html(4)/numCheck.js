const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
const randomNum = Math.floor(Math.random() * 3) + 1;

if(num == randomNum){
  check.innerHTML = '정답입니다!';
} else {
  check.innerHTML = "아쉽네요...<br>" + "정답은 " + randomNum + "입니다.";
}
