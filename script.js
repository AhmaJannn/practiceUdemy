'use strict';

//const add = 'test';

////Вызывается сразу после обьявления
//(function () {
//	//здесь находится приватная область видимости
//}());

//const Module = (function () {
//	return {
//		myMethod: function () {
//			console.log('myMethod был вызван');
//		},
//		someOtherMethod: function () {

//		}
//	};
//}());

//// Вызовем функцию как метод объекта
//Module.myMethod();
//Module.someOtherMethod();

//var Module = (function () {
//	var privateMethod = function () {

//	};
//	return {
//		publicMethod: function () {
//			// у этого метода есть доступ к privateMethod, мы можем вызвать его здесь так:
//			// privateMethod();
//		}
//	};
//})();


//Вот пример объекта, возвращаемого из IIFE, который содержит общедоступные методы и может обращаться к приватным функциям:
var Module = (function () {
	var myModule = {};
	var _privateMethod = function () {

	};
	myModule.publicMethod = function () {

	};
	myModule.anotherPublicMethod = function () {

	};
	return myModule; // возвращает объект с общедоступными методами
})();

// использование модуля
Module.publicMethod();




//const number = 1;

//(function () {
//	let number = 2;
//	console.log(number);
//	console.log(number + 3);
//}());

//console.log(number);

//const user = (function () {
//	const privat = function () {
//		console.log('I am privat');
//	};
//	return {
//		sayHello: privat
//	};
//}());

//user.sayHello();