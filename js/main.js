const [spanHr, spanMin, spanSec] = document.querySelectorAll('span');

setInterval(() => {
	const hr = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();
	let num = 1;

	// spanHr.innerText = hr;
	if (hr > 12) {
		spanHr.innerText = '0' + (hr - 12);
	} else {
		spanHr.innerText = hr;
	}
	// spanMin.innerText = min;
	if (min < 10) {
		spanMin.innerText = '0' + min;
	} else {
		spanMin.innerText = min;
	}
	// spanSec.innerText = sec;
	if (sec < 10) {
		spanSec.innerText = '0' + sec;
	} else {
		spanSec.innerText = sec;
	}
}, 1000);
