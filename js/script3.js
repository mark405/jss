'use strict';

// Действия с элементами на странице

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
                                                  //OR
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');   // создаем элемент который находится только в JS
// const text = document.createTextNode('Here');   

div.classList.add('black');  // добавляем к нему классы с css свойствами


// wrapper.append(div);  // добавляем в конец  класса wrapper 

// wrapper.prepend(div);  // добавляем в начало класса 

// hearts[0].before(div); //   добавляем div перед hearts

// circles[0].remove();  // удаляем первый кружок

hearts[0].replaceWith(circles[0]);  // заменяем