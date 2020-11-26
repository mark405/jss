'use strict';
// 1



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено слишком мало фильмов');
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else if (10 < personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
           
            let ask = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (ask === '' || ask === null) {
                console.log('Вы ввели неккоректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = ask;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Жанр под номером ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

// toggleVisibleMyDB();









// 1





