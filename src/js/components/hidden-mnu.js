import { getScrollWidth } from '../helpers/functions';

export default class HiddenMenu {
  constructor({ menuElement, buttonElement, openTransition = 0, callbackOn, callbackOff }) {
    this._menu = menuElement;
    this._button = buttonElement;
    this._transition = openTransition;
    this._callbackOn = callbackOn;
    this._callbackOff = callbackOff;
    this._open = false;

    this.init();
  }

  init() {
    this._button.addEventListener('mousedown', this._toggleMenu.bind(this));
  }

  _toggleMenu() {
    if (!this._open) {
      this._button.classList.add('is-active');
      this._menu.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = getScrollWidth() + 'px';

      setTimeout(() => {
        if (this._open) this._menu.classList.add('is-complete');
      }, this._transition);

      if (typeof this._callbackOn === 'function') this._callbackOn.call(null, this._menu, this._button);

      this._open = true;
    } else {
      this._button.classList.remove('is-active');
      this._menu.classList.remove('is-active', 'is-complete');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (typeof this._callbackOff === 'function') this._callbackOff.call(null, this._menu, this._button);

      this._open = false;
    }
  }
}

const menuLinks = [...document.querySelectorAll('.hide-menu__navigation .navigation__item')];
let transition = 0;
menuLinks.forEach(link => {
  link.style['transition-delay'] = transition + 'ms';
  transition += 100;
});
