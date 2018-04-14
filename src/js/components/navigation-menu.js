const navigationMnuItem = [...document.querySelectorAll('.navigation-mnu-item')];

navigationMnuItem.forEach(item => {
  item.addEventListener('click', function (event) {
    this.classList.toggle('navigation-mnu-item_active');
  });
});