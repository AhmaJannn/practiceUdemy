"use strict";

const wrapper = document.querySelector('.btn-block'),
	btns = wrapper.querySelectorAll('button');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
//console.log(btns[0].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));

//if (btns[0].classList.contains('red')) {
//	console.log('red');
//}

btns[0].addEventListener('click', () => {
	//if (btns[1].classList.contains('red')) {
	//	btns[1].classList.remove('red');
	//} else {
	//	btns[1].classList.add('red');
	//}

	btns[1].classList.toggle('red');
});

//console.log(btns[0].className);

wrapper.addEventListener('click', event => {
	if (event.target && event.target.matches("button.red")/*event.target.tagName == "BUTTON"*/ /*event.target.classList.contains('blue')*/) {
		console.log("Hello");
	}
});

//btns.forEach(btn => {
//	btn.addEventListener('click', () => {
//		console.log("Hello");
//	});
//});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
