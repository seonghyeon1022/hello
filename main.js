const toogleBtn = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const priceSort = document.querySelector('.container__price');
const menuSort = document.querySelector('.container__menu');
const placeSort = document.querySelector('.container__place');
const randomSort = document.querySelector('container__random');

const price = document.querySelector('#price');
const block = document.querySelector('#menu');
const place = document.querySelector('#place');
const random = document.querySelector('#random');

toogleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

price.addEventListener('click', function () {
    priceSort.classList.add('active');
    menuSort.classList.remove('active');
    placeSort.classList.remove('active');
    randomSort.classList.remove('active');  
});

block.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.add('active');
    placeSort.classList.remove('active');
    randomSort.classList.remove('active');	
});

place.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.remove('active');
    placeSort.classList.add('active');
    randomSort.classList.remove('active');
});

random.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.remove('active');
    placeSort.classList.remove('active');
    randomSort.classList.add('active');
});

