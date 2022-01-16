/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';


document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		btnConfirm = document.querySelector('[data-buttons="1"]'),
		inputDB = document.querySelector('.adding__input'),
		checkBoxFilm = document.querySelector('[data-checkbox="1"]');


	adv.forEach(element => {
		element.remove();
	});

	genre.textContent = "ДРАМА";

	poster.style.backgroundImage = 'url("img/bg.jpg")';

	function updateDB() {
		movieList.innerHTML = '';
		movieDB.movies.sort();
		movieDB.movies.forEach((film, i) => {
			movieList.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
				<div class="delete"></div>
			</li>
		`;
		});
	}
	updateDB();

	const addFilmDB = (event) => {
		event.preventDefault();
		if (inputDB.value.length == 0) {
			inputDB.value = '';
		}
		else if (inputDB.value.length >= 21) {
			inputDB.value = '...';
			movieList.innerHTML += `
		<li class="promo__interactive-item">${inputDB.value}
			<div data-delete="1" class="delete"></div>
		</li>`;
			inputDB.value = '';
		} else {
			movieDB.movies.push(`${inputDB.value}`);
			movieList.innerHTML += `
		<li class="promo__interactive-item">${movieDB.movies.length} ${inputDB.value}
			<div data-delete="1" class="delete"></div>
		</li>`;
			inputDB.value = '';
			if (checkBoxFilm.value == 'off') {
				console.log("Добавляем любимый фильм");
			}
		}
		updateDB();
		updateBtns();
	};

	btnConfirm.addEventListener('click', addFilmDB);


	const checkValue = function () {
		if (checkBoxFilm.value == 'on') {
			checkBoxFilm.value = 'off';
		} else {
			checkBoxFilm.value = 'on';
		}
	};
	checkBoxFilm.addEventListener('click', checkValue);

	function updateBtns() {
		const btnDelete = document.querySelectorAll('.delete');
		btnDelete.forEach((element) => {
			element.addEventListener('click', () => {
				element.offsetParent.remove();
			});
		});
	}
	updateBtns();

});

//delete movieDB.movies[movieDB.movies.length - 1];