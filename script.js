'use strict';

//new RegExp('pattern', 'flags');
// /pattern/f

//const ans = prompt('Введите имя', '');
//const ans = prompt('Введите числа', '');

//const reg = /n/ig;
//const reg = /\d/g;
//console.log(reg.test(ans));
//console.log(ans.match(reg));

const str = 'My name is R2D2';

//console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\S/ig));

/* Экранирование */

// \d - цифры
// \w - буквы
// \s - пробелы

// \D - НЕ цифры
// \W - НЕ буквы
// \S - НЕ пробелы

/* Флаги */
//i - Найти в независимости от регистра
//g - (глобал) найти несколько вхождений
//m - включает многострочный режим


//console.log(ans.search(reg));
//console.log(ans.match(reg));

//const pass = prompt('Password', '');

//console.log(pass.replace(/\./g, "*"));

//console.log('12-34-56'.replace(/-/g, ":"));


