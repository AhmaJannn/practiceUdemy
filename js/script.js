'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(function (item) {
	console.log(item);
});

const firstHearts = document.querySelector('.heart');
console.log(firstHearts);

const firstDivHTML = document.querySelector('div');
console.log(firstDivHTML);