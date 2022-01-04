'use strict';


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы класический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман');
		} else {
			alert('Ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenders: function () {
		for (let i = 0; i < 1; i++) {
			let genres = prompt(`Введите ваши любимые жарны через запятую`).toLowerCase();

			if (genres === '' || genres == null) {
				console.log("Вы ввели некорректные данные или вовсе их не ввели");
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}

		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	}
};

