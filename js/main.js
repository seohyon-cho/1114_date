const now = new Date(); // 현재 시간 인스턴스객체 반환
const year = now.getFullYear(); // 시간 인스턴스에서 메서드 활용해 년도 반환
const month = now.getMonth(); // 월의 값이 아닌 순서
const monthName = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
console.dir(now);
console.log(year);
console.log(month);
console.log(monthName[month]);

const date = now.getDate(); // 일 반환
const day = now.getDay(); // 순서가 반환되는데, 일요일부터 시작해서 0, 1, 2 로 순서 따짐.
const hour = now.getHours(); // 시간 반환
const min = now.getMinutes(); // 분 반환
const sec = now.getSeconds(); // 초 반환
const time = now.getTime(); // 표준시가 지정된 시점으로부터의 ms 값이 반환됨.
console.log(time);
console.log(sec);
console.log(min);
console.log(hour);
console.log(date);
console.log(day);

// 특정 국가의 표준 시 구하는 방법
// 1. 우리나라 시간대를 밀리세컨드로 반환 후, 시차값을 밀리세컨드로 변환하여 빼준다.
const timeGerman = time - 1000 * 60 * 60 * 8;
// 2. 해당 밀리세컨드 값을 new Date()의 인수로 전달하면
// 해당 밀리세컨드 시간 값에 맞게 시간 인스턴스 값이 수정되어 반환된다.
const nowGerman = new Date(timeGerman);
console.log('한국시간', now);
console.log('독일시간', nowGerman);
