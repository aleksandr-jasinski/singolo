const MENU = document.getElementById('menu');
const BTN_LEFT = document.getElementsByClassName('slider__btn-left');
const BTN_RIGHT = document.getElementsByClassName('slider__btn-right');
const SLIDER1 = document.getElementById('slide1');
const SLIDER2 = document.getElementById('slide2');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu__item_active'));
  event.target.classList.add('menu__item_active');
})


