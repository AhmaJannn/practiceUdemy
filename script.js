"use strict";

// this - это, то что окружает функцию и в каких условиях она вызывается
/* бомж - функционирует в пределах всего мира, у него нет привязки к определённому месту, но если мы поместим его в специальное учереждение, где он сможет жить и чем-то заниматься он получит контекст вызова */

//1)
//function showThis(a, b) {
//	console.log(this);
//	function sum() {
//		console.log(this);
//		return a + b;
//	}
//	console.log(sum());
//}

//showThis(3, 5);

//2)
//const obj = {
//	a: 20,
//	b: 15,
//	sum: function () {
//		console.log(this);
//		//function shout() {
//		//	console.log(this);
//		//}
//		//shout(); - 1)
//	}
//};
//obj.sum();

//3)
//function User(name, id) {
//	this.name = name;
//	this.id = id;
//	this.human = true;
//	this.hello = function () {
//		console.log(`Hello, ${this.name}`);
//	};
//}
//const ivan = new User('Ivan', 23);

//4)
//function sayName(surname) {
//	console.log(this);
//	console.log(`${this.name} ${surname}`);
//}

//const user = {
//	name: 'John'
//};

//sayName.call(user, 'Smith');
//sayName.apply(user, ['Smith']);

//function count(sum) {
//	return this * sum;
//}

//const double = count.bind(2);
//console.log(double(3));
//console.log(double(12));


// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта = сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

//btn.addEventListener('click', function () {
//	//console.log(this);
//	this.style.backgroundColor = 'red';
//});

btn.addEventListener('click', (e) => {
	console.log(this);
	e.target.style.backgroundColor = 'red';
});

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		};
		say();
	}
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(4));
