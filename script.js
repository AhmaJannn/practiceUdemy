'use strict';

function Hello() {
	console.log("Hello, world!");
	debugger;
}

Hello();

function hi() {
	console.log("Say hi!");
}

hi();

const arr = [1, 62, 13, 84, 124],
	sorted = arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}

console.log(sorted);