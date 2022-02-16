"use strict";


// filter - создает новый массив, исключая из старого неподходящие под условия элементы.
//const names = ['Ivan', 'Ann', 'Ksenia', 'Voldeemart'];

//const shortName = names.filter((name) => {
//	return name.length < 5;
//});
//console.log(shortName);


// map - создает новый массив, преобразовывая/заменяя элементы старого.
//const answers = ['IvAn', 'AnnA', 'HeLLo'];
//let answers = ['IvAn', 'AnnA', 'HeLLo'];

//const result = answers.map(name => name.toLowerCase());
//answers = answers.map(name => name.toLowerCase()); - плохо для иммутабельности

//console.log(result);
//console.log(answers);


// every / some - возвращают boolean (true/false) 
// some - хотя бы один элемент
// every - если все элементы

//const array = [4, 'qwq', 'fqweqfqf'];
//const array = [4, 12, 42];

//console.log(array.some(element => typeof (element) === 'number'));
//console.log(array.every(element => typeof (element) === 'number'));


// reduce - схлопывание елементов и вовзращение нового значения

const arr = [4, 5, 1, 3, 2, 6];
//const arr = ['apple', 'plum', 'pear'];

const res = arr.reduce((sum, element) => sum + element);
//const res = arr.reduce((sum, element) => sum - element, 0);
// 							0  +  4 - первый элемент не в счёт
// 							4  +  5
// 							9  +  1 ....
//const res = arr.reduce((sum, element) => `${sum}, ${element}`);

console.log(res);


//Object.entries - преобразовывает обьект (ключ/значение) в массив массива

const obj = {
	ann: 'persone',
	ivan: 'persone',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj);

//const newArr = Object.entries(obj)
//	.filter(element => element[1] === 'persone')
//	.map(element => element[0]);

console.log(newArr);








