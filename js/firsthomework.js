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

// 3

const last = prompt('Один из последних фильмов', ''),
      ten = prompt('На сколько вы его оцените', ''),
      last2 = prompt('Один из последних фильмов', ''),
      ten2 = prompt('На сколько вы его оцените', '');

personalMovieDB.movies[last] = ten;
personalMovieDB.movies[last2] = ten2;

console.log(personalMovieDB);