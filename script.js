const MENU = document.getElementById('menu');
const BTN_LEFT = document.getElementsByClassName('slider__btn-left');
const BTN_RIGHT = document.getElementsByClassName('slider__btn-right');
const SLIDER1 = document.getElementById('slide1');
const SLIDER2 = document.getElementById('slide2');

const PORTFOLIO = document.getElementById('portfolio-nav');
const GALLERY = document.getElementById('gallery');

const SUBMIT_BTN = document.getElementById('submit');
const CLOSE_BTN = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu__item_active'));
  event.target.classList.add('menu__item_active');
})

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('nav > ul > li').forEach(el => el.classList.remove('portfolio-nav__list-item_active'));
  event.target.classList.add('portfolio-nav__list-item_active');
})

GALLERY.addEventListener('click', (event) => {
  GALLERY.querySelectorAll('.gallery__placeholder').forEach(el => el.classList.remove('gallery__placeholder-active'));
  event.target.classList.add('gallery__placeholder-active');
})

SUBMIT_BTN.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  if (subject == '') {
    document.getElementById('result_subject').innerText = 'No subject';
  }
  else {
    document.getElementById('result_subject').innerText = subject;
  }
  const message = document.getElementById('form__message').value.toString();
  if (message == '') {
    document.getElementById('result_message').innerText = 'No description';
  }
  else {
    document.getElementById('result_message').innerText = message;
  }

  document.getElementById('message-block').classList.remove('hidden');
})

CLOSE_BTN.addEventListener('click', () => {
  document.getElementById('result_subject').innerText = '';
  document.getElementById('get-quote').reset();
  document.getElementById('message-block').classList.add('hidden');
})


//shuffle
/*
var list = document.getElementById('gallery'),
    tab = document.getElementsByClassName('portfolio-nav__list-item');
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
tab.onclick = shuffleNodes;
*/
