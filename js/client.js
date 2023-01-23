let burgerMenu = document.querySelector('.burger');
let burgerNavigation = document.querySelector('.nav');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__active');
  burgerNavigation.classList.toggle('nav__active');
  body.classList.toggle('stop-scroll');
});