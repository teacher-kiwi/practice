const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const q1 = param.get('q1');
const q2 = param.get('q2');

if(q1.toLowerCase() === 'thewar' && q2.toLowerCase() === 'rockfestival'){
  message.innerHTML = '정말 대단합니다!';
} else if(q1.toLowerCase() === 'thewar' || q2.toLowerCase() === 'rockfestival'){
  message.innerHTML = '한 문제만 맞았네요!';
} else {
  message.innerHTML = '다시 생각해보세요!';
}
