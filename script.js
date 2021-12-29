'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('Насколько оцените его?', '');
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

//rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы класический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('Ошибка');
	}
}

//detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

function writeYourGenders() {
	if (personalMovieDB.count >= 3) {
		for (let i = 0; i < 3; i++) {
			personalMovieDB.genres[i] = prompt(`Ваш любимый жарн под номером ${i + 1}?`);;
		}
	}
}

writeYourGenders();
showMyDB();



