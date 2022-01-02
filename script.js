"use strict";

//let a = 5,
//	b = a;

//b = b + 5;

//console.log(b);
//console.log(a);

//const obj = {
//	a: 5,
//	b: 10
//};

//const copy = obj; //Ссылку 

//copy.a = 10;

//console.log(copy);
//console.log(obj);

//function copy(mainObj) {
//	let objCopy = {};

//	for (let key in mainObj) {
//		objCopy[key] = mainObj[key];
//	}
//	return objCopy;
//}

const numbersObj = {
	a: 2,
	b: 6,
	c: {
		x: 10,
		y: 5
	}
};

//const copyNumbersObj = copy(numbersObj);

//copyNumbersObj.a = 10;
//copyNumbersObj.c.x = 20;

//console.log(copyNumbersObj);
//console.log(numbersObj);
const add = {
	d: 42,
	e: 14
};

const clone = (Object.assign({}, add));

clone.d = 20;

//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'afafdsfsf';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];


console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];
newAarray[0] = "afasf";

console.log(array);
console.log(newAarray);


const q = {
	top: 9,
	bottom: 12
};

const newQ = { ...q };
newQ.top = 12;

console.log(q);
console.log(newQ);