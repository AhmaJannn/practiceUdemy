'use strict';

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMessage("Hello, world");
console.log(num);


//function calc(a, b) {
//	return (a + b);
//}

//console.log(calc(5, 6));
//console.log(calc(1, 9));
//console.log(calc(15, 4));


// function declaration
function ret() {
	let num = 50;

	// 

	return num;
}
// ----------------

const anotherNum = ret();
console.log(anotherNum);

//function expression 
const logger = function () {
	console.log("Hello");
};
// -----------------

logger();

// Arrow function
const calc = (a, b) => {
	console.log('1');
	return a + b;
};