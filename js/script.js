"use strict";

const inputRub = document.querySelector('#rub'),
	inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	//request.open(method, url, async, login, pass);

	// Сходи в магазин
	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	//request.addEventListener('readystatechange', () => {
	request.addEventListener('load', () => {
		//if (request.readyState === 4 && request.status === 200) {
		if (request.status === 200) {
			//console.log(request.response);
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = "Что-то пошло не так";
		}
	});

	// status - 404 not found, 200 OK
	// statusText - not found, OK
	// response - ответ от сервера
	// readyState - текущее состояние нашего запроса DONE 




});