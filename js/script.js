// Переменные и строгий режим

"use strict"; // Строгий режим

let number = 5; // Изменяемая переменная
const leftborderwidth = 1; // Константа(неизменяемая переменная)

number = 10;
console.log(number);


// типы данных

let num = 4.6; // int

const string = 'Alex'; // string

const booltrue = 'true';
const boolfalse = 'false'; // boolean

const obj = {
    name: 'John',
    age: 25,
    isMarried: false // object
};
console.log(obj.age);

let array = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(array[1]); //object.array


// общение с пользователем в web

// alert('hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 10);

// вся информация от пользователя будет в виде строки

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers); //заменяет ответом всю страницу сайта


// Интерполяция

const category = 'toys';
console.log(`http://someurl.com/${category}`);

const user = 'Ivan';

alert(`Привет, ${user}`);

console.log('arr' + ' - object');

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);


console.log(2*4 == '8');
console.log(2*4 === '8');

// && - and
// || - or

const ischecked = true,
      isclosed = false;

console.log(ischecked || isclosed);
