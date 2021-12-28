'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//	b = prompt('Насколько оцените его?', ''),
//	c = prompt('Один из последних просмотренных фильмов?', ''),
//	d = prompt('Насколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//let i = 0;
//while (i < 2) {
//	let a = prompt('Один из последних просмотренных фильмов?', ''),
//		b = prompt('Насколько оцените его?', '');
//	personalMovieDB.movies[a] = b;
//	i++;
//}


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

//let i = 0;
//do {
//	if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
//		alert('Просмотрено довольно мало фильмов');
//	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//		alert('Вы класический зритель');
//	} else if (personalMovieDB.count > 30) {
//		alert('Вы киноман');
//	} else {
//		alert('Ошибка');
//		break;
//	}
//	let a = prompt('Один из последних просмотренных фильмов?', ''),
//		b = prompt('Насколько оцените его?', '');
//	if (a === '' || b === '' || a === null || b === null || a.length > 50) {
//		continue;
//	}
//	personalMovieDB.movies[a] = b;
//	i++;
//} while (i < 2);


console.log(personalMovieDB);

