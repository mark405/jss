'use strict';
// 1

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '0');

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
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else if (10 < personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else {
    alert('Произошла ошибка');
}
// 3



for (let i = 1; i < 3; i++) {

    const last = prompt('Один из последних фильмов', ''),
          ten = prompt('На сколько вы его оцените', '');

    if (last === null || ten === null || last.length === 0 || ten.length === 0 || last.lenght > 50 || ten.length > 50) {
        console.log('error');
        i--;
    } else {
        personalMovieDB.movies[last] = ten;
        console.log('ok');
    }
}




console.log(personalMovieDB);




// 1



