import Parallax from 'parallax-js';
import { documentLoaded } from '../helpers/functions';


function init(elems) {

  function parallaxInit(img) {
    const parallaxInstance = new Parallax(img);
    const product = img.closest('.banner');
    parallaxInstance.inputElement = product;
    parallaxInstance.friction(0.1, 0.1);
    parallaxInstance.limit(20, 20); // 20, 20
    parallaxInstance.scalar(4, 4); // 2, 2

    parallaxInstance.hoverOnly = true;

    img.setAttribute('data-parallax-init', '');
  }

  if (Array.isArray(elems)) {
    elems.forEach(parallaxInit);
  } else {
    parallaxInit(elems);
  }

}

documentLoaded(() => {
  const bannersImg = [...document.querySelectorAll('.banner__img:not([data-parallax-init])')];
  init(bannersImg);
});


export default init;