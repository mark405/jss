'use strict';

// КЛАССЫ

let str = 'sone';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = Object.create(soldier); // новый метод создающий новый обьект

// const john = {
//     health: 100,
// };

// john.__proto__ = soldier;  //  устаревший метод

// console.log(john.armor);   

// Object.setPrototypeOf(john, soldier); //  новый метод делающий прототип обьекта

john.sayHello();


// динмаическая типизация

//To String

// 1)old
console.log(typeof(String(null)));

//2)new
console.log(typeof(5 + ''));  //null or undefind


const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
// 26px


//to Number

//1)old

console.log(typeof(Number('4')));

//2)new

console.log(typeof(+'4'));

//3)

console.log(typeof(parseInt('15px', 10)));


let answer = +prompt('blablabla', '');


//To boolean

// 0, '', null, undefined, Nan; - FALSE

//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4444')); 



