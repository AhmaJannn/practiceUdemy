"use strict";
//const timeId = setTimeout(function (text) {
//	console.log(text);
//}, 2000, 'Hello, world');

const btn = document.querySelector('.btn');

let timerId,
	i = 0;

function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {
			setInterval();
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

//btn.addEventListener('click', () => {
//	//const timerId = setTimeout(logger, 2000);
//	const timerId = setInterval(logger, 500);
//});

////setTimeout(logger, 2000);

//function logger() {
//	if (i === 3) {
//		setInterval(timerId);
//	} else {
//		console.log('text');
//		i++;
//	}
//}

//let id = setTimeout(function log() {
//	console.log('Hello');
//	id = setTimeout(log, 500);
//}, 5000);

