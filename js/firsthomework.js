'use strict';
// 1

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    personalMovieDB.count = numberOfFilms;

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
    
}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else if (10 < personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const ask = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = ask;
    }
}


start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();





// 1





