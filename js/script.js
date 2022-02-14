"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Tabs

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			//item.style.display = 'none';
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		//tabsContent[i].style.display = 'block';
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	// Timer 

	const deadline = '2022-02-11';

	function getTimeRemaining(endTime) {
		const t = Date.parse(endTime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num > 0 && num < 10) {
			return (`0${num}`);
		} else {
			return num;
		}
	}

	function setClock(selector, endTime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endTime);

			if (t.total <= 0) {
				days.innerHTML = "00";
				hours.innerHTML = "00";
				minutes.innerHTML = "00";
				seconds.innerHTML = "00";
				clearInterval(timeInterval);
			} else {
				days.innerHTML = getZero(t.days);
				hours.innerHTML = getZero(t.hours);
				minutes.innerHTML = getZero(t.minutes);
				seconds.innerHTML = getZero(t.seconds);
			}


		}
	}

	setClock('.timer', deadline);

	// Modal

	const modalBtn = document.querySelectorAll('[data-modal]'),
		modalWindow = document.querySelector('.modal');

	modalBtn.forEach(element => {
		element.addEventListener('click', openModal);
	});

	function openModal() {
		modalWindow.classList.add('show');
		modalWindow.classList.remove('hide');
		//modalWindow.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearTimeout(modalTimerId);
	}

	function closeModal() {
		modalWindow.classList.add('hide');
		modalWindow.classList.remove('show');
		//modalWindow.classList.toggle('show');
		document.body.style.overflow = '';
	}

	modalWindow.addEventListener('click', (event) => {
		const target = event.target;

		if (target === modalWindow || target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);


	// Sample 

	class MenuCard {
		constructor(scr, alt, title, descr, price, parentSelector, ...classes) {
			this.scr = scr;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price *= this.transfer;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.classes = 'menu__item';
				element.classList.add(this.classes);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
			element.innerHTML = `
				<img src=${this.scr} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;
			this.parent.append(element);
		}
	}

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container',
	).render();

	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню "Премиум"',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		20,
		'.menu .container',
		'menu__item',
		'big'
	).render();

	new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		15,
		'.menu .container',
		'menu__item'
	).render();

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		sucsess: 'Спасибо. Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(element => {
		postData(element);
	});

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			//form.append(statusMessage);
			form.insertAdjacentElement('afterend', statusMessage);

			//const request = new XMLHttpRequest();
			//request.open('POST', 'server.php');

			//request.setRequestHeader('Content-type', 'multipart/form-data');
			//request.setRequestHeader('Content-type', 'application/json');

			const formData = new FormData(form);

			const object = {};
			formData.forEach(function (value, key) {
				object[key] = value;
			});

			//const json = JSON.stringify(object);

			//request.send(json);
			fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(object)
			}).then(data => data.text())
				.then(data => {
					console.log(data);
					showThanksModal(message.sucsess);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => { form.reset(); });

			//request.addEventListener('load', () => {
			//	if (request.status === 200) {
			//		console.log(request.response);
			//		showThanksModal(message.sucsess);
			//		form.reset();
			//		statusMessage.remove();
			//	} else {
			//		showThanksModal(message.failure);
			//	}
			//});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div data-close class="modal__close">×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	//fetch('https://jsonplaceholder.typicode.com/posts', {
	//	method: 'POST',
	//	body: JSON.stringify({ name: 'Alex' }),
	//	headers: {
	//		'Content-type': 'application/json'
	//	}
	//})
	//	.then(response => response.json())
	//	.then(json => console.log(json));

	//fetch('https://jsonplaceholder.typicode.com/todos/1')
	//	.then(response => response.json())
	//	.then(json => console.log(json));



});
