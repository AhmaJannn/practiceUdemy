"use strict";

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

//btn.onclick = function () {
//	alert('Click');
//};

//btn.onclick = function () {
//	alert('Second click');
//};

//btn.addEventListener('click', () => {
//	console.log('click');
//});

//btn.addEventListener('click', (event) => {
//	event.target.style.backgroundColor = 'blue';
//	//console.log('hover');
//});


//const deleteElement = function (event) {
//	event.target.remove();
//};

//btn.addEventListener('click', deleteElement);

let i = 0;
const deleteElement = (event) => {
	console.log(event.target);
	console.log(event.type);
	//i++;
	//if (i == 1) {
	//	btn.removeEventListener('click', deleteElement);
	//}
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault();

	console.log(event.target);
});

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});