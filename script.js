"use strict";

//Функция является объектом, в неё можно записать методы и свойтсва 
//Для создания типа данных используется new

//const num = new Number(2);
//const num = new Function(2);

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log(`Hello ${this.name}`);
	};
}

User.prototype.exit = function () {
	console.log(`Пользователь ${this.name} ушёл`);
};

const ivan = new User('Ivan', 23);
const alex = new User('Alex', 18);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
