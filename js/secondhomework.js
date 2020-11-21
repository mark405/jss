'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

console.log(numberOfFilms);


// 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <= 10) {
    alert('Просмотрено слишком мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


let i = 0;
while (i < 2) {
    const last = prompt('Один из последних фильмов', ''),
          ten = +prompt('На сколько вы его оцените', '');
    i++;

    if (last === null || ten === null || last.length === 0 || ten.length === 0 || last.lenght > 50 || ten.length > 50) {
        console.log('error');
        i--;
    } else {
        console.log('ok');
        personalMovieDB.movies[last] = ten;
    }

}


console.log(personalMovieDB);