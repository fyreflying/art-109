// console.log("hello world");

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
});