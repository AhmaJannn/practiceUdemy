"use strict";

const now = new Date();
//new Date.parse('2022-01-31');

//console.log(now.setHours(18));
console.log(now);

//const now = new Date('2022-02-11');
//const now = new Date(2000, 6, 2, 20);
//const now = new Date(-99999999999999);

//console.log(now);
//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getHours());
//console.log(now.getMinutes());
//console.log(now.getSeconds());
//console.log(now.getMilliseconds());
//console.log(now.getDay());
//console.log(now.getHours());
//console.log(now.getUTCHours());
//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

let start = new Date();
let some;

for (let i = 0; i < 100000; i++) {
	some = i + i ** 3;
}

console.log(some);

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
