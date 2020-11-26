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


// методы строк и чисел

const str = 'text';
const arr = [1, 2, 3];

console.log(str.length);  // кол-во символов
console.log(arr.length);  // кол-во обьектов в массиве
console.log(str[2]);  // индекс
console.log(str.toUpperCase()); // сделать все буквы большими
console.log(str.toLowerCase()); // сделать все буквы маленькими

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // индекс начала слова
console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6)); // console.log(logg.slice(6, 11))

console.log(logg.substring(6)); // аналогично только с положительными значениями

console.log(logg.substr(6, 5)); // начиная с индеса + сколько символов


const numberous = 12.2;
console.log(Math.round(numberous)); //  округление

const texterous = '12.2px';
console.log(parseInt(texterous)); //  переводит в другую сисмтему исчесления с округлением
console.log(parseFloat(texterous)); // переводит в другую систему исчесления без округления


// callback функции


function something () {
    setTimeout(function() {
        console.log(1);      // задержка в 500 мс
    }, 500);
}

function second() {
    console.log(2);
}

something();
second();


function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {                       // callbakc функция
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);

// Методы обьектов

const options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;  // деструктуризация обьекта
console.log(border, bg);

console.log(Object.keys(options));
console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// delete options.name; // delete

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значения ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//        console.log(`Свойство ${key} имеет значение ${options[key]}`); // Ввести значение каждого ключа
//         counter++;
//     }
// }
// console.log(`Количество обьектов ${counter}`);



// Методы массивов

const massive = [1, 2, 3, 6, 8];
// massive[99] = 0;                   // Свойство length считает индекс последний элемент плюс один
// console.log(massive.length);

massive.forEach(function(item, i, massive) {   // три аргумента {
                                                                // item: значение элемента массива,
                                                                // i: индекс элемента массива,
                                                                // massive: ссылка на данный массив}
    console.log(`${item}: ${i} в нутри массива ${massive}`);
});


// massive.pop(); // удаляет последний элемент массива
// massive.push(10); // добавляет элемент в конец

// console.log(massive);

for (let i = 0; i < massive.length; i++) {
    console.log(massive[i]);
}

for (let value of massive) {   // работает только с массивами
    console.log(value);
}


const stringer = prompt('', '');
const products = stringer.split(', ');  // преобразует из строки массив, разделяя ее по запятой с пробелом
products.sort();  //  сортиурет строки по алфавиту или числа в массиве по возрастанию
console.log(products.join('; '));  // преобразует из массива строку,
                                    //  разделяя элементы массива на точку с запятой с пробелом
function compareNum(a, b) {
    return a - b;
}

// псевдомассивы не имеют никаких методов и свойств


// ппередача по ссілке ил по значению

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// const objective = {
//     a: 5,
//     b: 1
// };

// const copy = objective; //ссылка

// copy.a = 10;

// console.log(copy);
// console.log(objective);

function copy(mainObj) {
    let objcopy = {};
    
    let key;
    for (key in mainObj) {
        objcopy[key] = mainObj[key];
    }

    return objcopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

console.log(Object.assign(numbers, add));  // Object.assign соединяет два обьекта


// копии массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'gfggggg';
console.log(newArray);
console.log(oldArray);


//  оператор spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  //  разлагает и соединяет два массива ил больше


console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numbering = [2, 5, 7];

log(...numbering);  // разлагает элементы


const arraying = ['a', 'b'];

const newAarray = [...arraying];  //  разлагает и создает копию массива arraying

const q = {
    one: 1,
    two: 2
};

const newObjection = {...q};  //  разлагает и создает копию обьекта q

newObjection.one = 10;       

console.log(newObjection);
console.log(q);