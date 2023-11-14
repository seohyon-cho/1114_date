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
