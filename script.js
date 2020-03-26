const MENU = document.getElementById('menu');
const BTN_LEFT = document.getElementsByClassName('slider__btn-left');
const BTN_RIGHT = document.getElementsByClassName('slider__btn-right');
const SLIDER1 = document.getElementById('slide1');
const SLIDER2 = document.getElementById('slide2');

const PORTFOLIO = document.getElementById('portfolio');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu__item_active'));
  event.target.classList.add('menu__item_active');
})

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('nav > ul > li').forEach(el => el.classList.remove('portfolio-nav__list-item_active'));
  event.target.classList.add('portfolio-nav__list-item_active');
})

//shuffle
/*
var list = document.getElementsByClassName('gallery'),
  button = document.getElementsByClassName('portfolio-nav__list-item');
function shuffle(items) {
  var cached = items.slice(0), temp, i = cached.length, rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = cached[rand];
    cached[rand] = cached[i];
    cached[i] = temp;
  }
  return cached;
}
function shuffleNodes() {
  var nodes = list.children, i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while (i < nodes.length) {
    list.appendChild(nodes[i]);
    ++i;
  }
}
button.onclick = shuffleNodes;
*/
