// Написать программу, которая создаст объект user с полями name и age, 
// заполнить их с помощью prompt и вывести после этого весь объект в консоль.

// user = {
//     name: prompt('введите имя'),
//     age: prompt('введите возраст')
// }
// console.log(user);

// var a = prompt ('введите имя'),
//     b = prompt ('введиете возраст'); 
// function fancUser(){
//     user= {
//         name: a,
//         age: b
//     }
//     console.log(user);
// }
// fancUser();

// Написать программу, с помощью prompt заполните массив из 5 элементов и выведете все элементы в обратном порядке. 
// (задание выполнить в 2 вариантах, с помощью for и while).
    
// var arr = [];
    

// function funcArr(){
//     for(var i = 0; i < 5; i++){
//         arr[i] = prompt('введите начение');    
//     }
//     console.log(arr);
// }
// funcArr();
// var arr = [];
// for(var i=0; i<5; i++){
//    arr[i]=prompt('введите значение', +i);
// }
// console.log(arr.reverse());
// var i = 0;
// var arr = [];
// while(i<5){
//     i++;
//     arr[i]=prompt('введите значение', +i);
// }
// console.log(arr.reverse());

// Создать объект магазин с полями имя и продукты. Заполнить эти поля с помощью prompt. 
// Продукт имеет поля: название, цена. Число продуктов в магазине задается вами через prompt. Цена имеет валидацию.
// var shop = {};
// shop.name = prompt("Введите имя магазина: ");
// var col = prompt("Введите количество пробуктов в магазине: ");
// shop.products = [];
// for(var i=0;i<col;i++){
// shop.products[i] = {};
// shop.products[i].name = prompt("Введите название продукта ");
// shop.products[i].price = Number(prompt("Введите цену"));
// }

// console.log(shop);

// Выполнить прошлое домашнее задание с использованием функций.
//  Написать программу, которая будет принимать на вход текст, с ошибкой (после точки строчная буква), 
//  и будет выдавать исправленный текст.	
// Пример ввода: “Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.”
// 	Пример вывода:”Саша купил машину. Он использует ее каждый день. Саша очень рад своей покупке.”

// function trueText(){
//     var text = 'Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.';
//     var n = text.replace('он', 'Он').replace('саша', 'Саша');
//     console.log(n);
// }
// trueText();






// Написать программу, которая будет обрезать текст начиная с первого слова и до слова “кукушка”.
// Пример ввода:”В лесу была хорошая погода. Кукушка куковала.”
// Пример вывода: “В лесу была хорошая погода. ”
// var str = 'В лесу была хорошая погода. Кукушка куковала.';
// function myFunc(){    
//     var n = str.slice(0,-17);
//     console.log(n);
// }
// myFunc();



// Написать скрипт, который создаст объект магазин, который будет иметь поля: имя и  продукты, также
//  написать функцию поиска в магазине по цене, функцию поиска по названию, функцию добавления нового продукта
//   в конец списка, функцию удаления продукта по номеру в списке (нумерация идет с нуля), функцию изменения цены 
//   товара по его номеру, функцию вывода всех товаров, функция вывода всего магазина в консоль.




// console.log(shop);














// // игра флжпи бердс

// var cvs = document.getElementById('canvas');
// var ctx = cvs.getContext('2d');
// // элементы
// var bird = new Image();
// var bg = new Image();
// var fg = new Image();
// var pipeUp = new Image();
// var pipeBottom = new Image();

// // звуки
// var fly = new Audio();
// var score_audio = new Audio();

// var gap = 120;
// var score = 0;

// // позиции птички
// var xPos = 10;
// var yPos = 150;
// var grav = 1;

// // нажитие кнопки
// document.addEventListener('keydown', moveUp);
// function moveUp(){
//     yPos -= 45;
//     fly.play();
// }

// // создание блоков
// var pipe = [];
// pipe[0] = {
//     x : cvs.width,
//     y : 0
// }
// // подключение файлов
// bird.src = 'img/bird.png';
// bg.src = 'img/bg.png';
// fg.src = 'img/fg.png';
// pipeUp.src = 'img/pipeUp.png';
// pipeBottom.src = 'img/pipeBottom.png';
// fly.src = 'audio/fly.mp3';
// score_audio.src = 'audio/score.mp3'
 
// function draw(){
//     ctx.drawImage(bg, 0, 0);

//     for(var i = 0; i < pipe.length; i++){
//     ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
//     ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
//     pipe[i].x--;

//     if( pipe[i].x == 125){
//         pipe.push({
//             x : cvs.width,
//             y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
//         });        
//     }  
    
//     if(xPos + bird.width >= pipe[i].x
//         && xPos <= pipe[i].x + pipeUp.width
//         && (yPos <= pipe[i].y + pipeUp.height 
//         || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
//         || yPos + bird.height >= cvs.height - fg.height) {
//             location.reload();     
//         }
//         if(pipe[i].x == 5){
//             score++;
//             score_audio.play();
//         }

//     } 
//     ctx.drawImage(fg, 0, cvs.height - fg.height);
//     ctx.drawImage(bird, xPos, yPos);

//     yPos += grav;

//     ctx.fillStyle = '#000';
//     ctx.font = '24px Verdana';
//     ctx.fillText('Счет:' + score, 10, cvs.height - 20);

//     requestAnimationFrame(draw);
// }
// pipeBottom.onload = draw;


// 1 Написать скрипт, который создаст дополнительный блок, с текстом  
// и картинкой (bgi), стили этому блоку добавить в CSS, а блок создать с 
// помощью JS.
// var site = document.body;
// site.innerHTML = '<div></div>';
// document.getElementsByTagName('div')[0].innerHTML = '<p>Hello World</p><img>';
// document.getElementsByTagName('div')[0].classList.add('container');

// var img = document.getElementsByTagName('div')[0].childNodes[1];
// img.src = 'img/bg.png';
// img.style.transition = '1s';




// 2 Получить в консоль содержимое любого другого блока. 
// Класс блока вводил пользователь, если класса нет, то выдать ошибку.

// 3 Уже существующему блоку дописать 2 новых класса.

// 4 ****Уже существующему блоку с 2 новыми классами написать анимацию.

// setInterval(function() {
//     img.classList.add('rotate');
//     img.classList.add('translateX');
//   }, 20)

// ПРИ НАЖАТИИ МЕНЯТЕТСЯ СТИЛЬ

var block1 = document.getElementsByClassName('block')[0];
var block2 = document.getElementsByClassName('block')[1];
block1.style.backgroundColor = 'red';
block2.style.backgroundColor = 'lightblue';
function clickBg(){
    block1.style.backgroundColor = 'gray';
}
block1.addEventListener('click', clickBg);
 
block2.onclick = function addBlock(){
    document.body.innerHTML += '<div>Третий лишний</div>';
    document.getElementsByTagName('div')[2].classList.add('block');
    document.getElementsByTagName('div')[2].style.backgroundColor = 'green';
}
    



// var conx = document.getElementsByClassName('contextmenu')[0];


// document.body.addEventListener('contextmenu', event=>{
//     event.preventDefault();
//     conx.style.top = event.clientY + 'px';
//     conx.style.left = event.clientX + 'px';
//     conx.style.display = 'block';
// })

// document.body.addEventListener('click', event =>{
//     if (event.button !==2){
//         conx.style.display = 'none';
//     }
// })

// document.getElementsByTagName('li')[0].onclick = function(){
//     document.body.innerHTML += '<div class = "ssquare"></div>';
// }