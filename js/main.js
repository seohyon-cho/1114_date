// 특정 시간 구간에 맞게 호출하는 메서드
// setTimeout(실행할 함수, 지연시간) : 일정 시간 이후에 한 번만 호출
// setInterval(실행할 함수, 반복되는 텀) : 일정 시간마다 계속해서 반복 호출

/* setTimeout(() => {
	console.log('5초 지난 뒤 실행');
}, 5000);

setInterval(() => {
	console.log('1초마다 반복실행');
}, 1000); */

//비구조 할당 (button을 모두 가져온 뒤, 첫 번째 버튼은 btnStart로, 두 번째 버튼은 btnStop으로 짝 짓는 것.)
const [btnStart, btnStop] = document.querySelectorAll('button');
// 전역변수를 써야 하는 경우
// 특정 변수값이 서로 다른 함수에서 공유 되어야 하는 경우
// [전역변수 쓰는 방법]
// : 코드블록 밖에서 변수 선언한 뒤, null이나 기본 자료값으로 초기화
// : 함수 안쪽에서 새로 지역변수를 만드는 것이 아니라, 기존 전역변수를 그대로 가지고 와서 새로운 값만 재할당하는 것.
let timer = null;

timer = setInterval(() => {
	console.log('1초마다 반복실행');
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});
btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		console.log('1초마다 반복실행');
	}, 1000);
});
