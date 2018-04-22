import { objectFitImages } from './polyfills/css/object-fit-images/my-lazySizes-version/OFLwithLazyload';
import { documentLoaded, noDragElements } from './helpers/functions';




// ONLOAD
documentLoaded(() => {
  OFIwithLazyload();
  preloaderLoad();
  noDragElements('img');

  document.body.classList.add('is-loaded')
});
// ONLOAD END



function preloaderLoad({ selector = '#preloader', transition = 1000 } = {}) {
  const preloader = document.querySelector(selector);
  if (!preloader) return;

  preloader.style.transition = `opacity ${transition}ms ease, visibility ${transition}ms ease`;
  preloader.classList.add('loaded');
  setTimeout(() => preloader.remove(), transition);
}


function OFIwithLazyload() {
  objectFitImages('img:not(.lazyload)');

  const imgs = [...document.getElementsByTagName('img')];
  if (!imgs.length) return;

  imgs.forEach(img => {
    img.addEventListener('lazyloaded', () => objectFitImages('img.lazyloaded'));
  });
}
