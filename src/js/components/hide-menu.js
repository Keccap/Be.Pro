import HiddenMenu from './hidden-mnu';
import { getScrollWidth } from '../helpers/functions';



const menuLinks = [...document.querySelectorAll('.hide-menu__navigation-mnu .navigation-mnu__item')];

let transition = 0;
menuLinks.forEach(link => {
  link.style['transition-delay'] = transition + 'ms';
  transition += 100;
});


export default new HiddenMenu({
  menuElement: document.querySelector('#js-hide-menu'),
  buttonElement: document.querySelector('#js-hambuger'),
  openTransition: 300,

  callbackOn(menu, button) {
    const headerContainer = document.querySelector('.header-container');
    const header = headerContainer.querySelector('.header');
    headerContainer.classList.add('no-bg');
    header.style.paddingRight = getScrollWidth() + 'px';
  },

  callbackOff() {
    const headerContainer = document.querySelector('.header-container');
    const header = headerContainer.querySelector('.header');
    headerContainer.classList.remove('no-bg');
    header.style.paddingRight = '';
  }
});

