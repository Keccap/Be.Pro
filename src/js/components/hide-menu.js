const hamburger = document.querySelector('#js-hambuger');
const hideMenu = document.querySelector('#js-hide-menu');
hamburger.addEventListener('mousedown', function (event) {
  this.classList.toggle('is-active');
  hideMenu.classList.toggle('is-open');
});