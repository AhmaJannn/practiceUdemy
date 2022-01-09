'use strict';

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	firstHearts = wrapper.querySelector('.heart');
//box.style.backgroundColor = 'green';
//box.style.width = '550px';

let num = 500 + 250;

box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'green';

//for (let i = 0; i < hearts.length; i++) {
//	hearts[i].style.backgroundColor = 'blue';
//}

//hearts.forEach(item => {
//	item.style.backgroundColor = 'green';
//});

//console.log(hearts);

const div = document.createElement('div');
div.classList.add('black');

//const text = document.createTextNode('Тут был я'); 

//document.body.append(div);

wrapper.append(div); //Внутри тега ПОСЛЕДНИМ
//wrapper.appendChild(div); - Устаревшее добавление

//wrapper.prepend(div); //Внутри тега ПЕРВЫМ
//wrapper.before(div); // Снаружи тега Перед ним
//wrapper.after(div); // Снаружи тега После него

//wrapper.insertBefore(div, hearts[0]); - Устаревшая 

//circles[0].remove();
//wrapper.removeChild(hearts[0]); // Устаревшая

//hearts[0].replaceWith(circles[0]); // Замена элементов
//wrapper.replaceChild(circles[0], hearts[0]); Устаревшая

div.innerHTML = "<h1>hello world!</h1>";
//div.textContent = "<h1>hello world!</h1>";

div.insertAdjacentHTML('beforebegin', "<h2>HELLO</h2>");