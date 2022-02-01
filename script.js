'use strict';

console.dir(document);

const box = document.querySelector('.box'),
	btn = document.querySelector('button');

const clientWidth = box.clientWidth;
const clientHeight = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;

console.log(clientWidth, clientHeight);
console.log(offsetWidth, offsetHeight);
console.log(scrollWidth, scrollHeight);

btn.addEventListener('click', event => {
	event.preventDefault();

	//box.style.height = scrollHeight + 'px';
	console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollHeight);

//document.documentElement.scrollTop = 0; -- для браузера в консоли 
//window.scrollBy(0, 400); -- относительно текущего положения 
//window.scrollTo(0, 400); -- относительно всей страницы 