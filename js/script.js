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

// Условия

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error');
}


if (nem < 49) {
    console.log('error');
} else if (nem > 100) {
    console.log('Много');  // стандартная запись
} else {
    console.log('ok');
}

(nem === 50) ? console.log('ok') : console.log('error'); //тернарная запись

const nem = 50;

switch (nem) {  // определяем переменную
    case 49:  //if (nem == 49)
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;                      //запись swift
    case 50:
        console.log('В точку');
        break;
    default:  //else
        console.log('Не в этот раз');
        break;
}

// циклы

let pum = 50;
// while (pum <= 55) {
//     console.log(pum);
//     pum++;
// }

// do {
//     console.log(pum);
//     pum++;
// }
// while (pum <55);

for (let i = 1; i < 8; i++) {
    console.log(pum);
    pum++;
}
for (let i=1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}



// Функции


// function declaration

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello world');
 

let dum = 20;

function showSecondMessage(text) {
    console.log(text);
    dum = 30;
}

showSecondMessage('hello');
console.log(dum);


function calc(a, b) {
    return (a + b);  //после ruturn код внутри функции становиться нвыполнимым
}

console.log(calc(5, 6));
console.log(calc(2, 7));


function ret() {
    let num = 50;
    return num;
}

const another = ret();
console.log(another);

//function expression

const logger = function() {
    console.log('hello');
};

logger();

//стрелочная функция

const calcu = (a, b) => { return a + b; };