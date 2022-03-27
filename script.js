'use strict';

//function User(name, age) {
//	this.name = name;
//	let userAge = age;
//	//this.age = age;

//	this.say = function () {
//		console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//	};

//	this.getAge = function () {
//		return userAge;
//	};

//	this.setAge = function (age) {
//		if (typeof age === 'number' && age > 0 && age < 110) {
//			userAge = age;
//		} else {
//			console.log("Недопустимое значение!");
//		}
//	};
//}

//const ivan = new User('Ivan', 35);

//console.log(ivan.name);
//console.log(ivan.getAge());

//ivan.setAge(27);
//ivan.name = 'Alex';

//ivan.say(); 

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Mukhsin-Zade';

	say = () => {
		console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
	}

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log("Недопустимое значение!");
		}
	}
}

const akhmed = new User('Akhmed', 21);

//console.log(akhmed.age);
//akhmed.age = 99;
//console.log(akhmed.age);

console.log(akhmed.surname);

akhmed.say();