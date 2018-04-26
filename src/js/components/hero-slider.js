import Swiper from 'Swiper';
import Parallax from 'parallax-js';
import { documentLoaded } from '../helpers/functions';




export const heroSlider = new Swiper('.hero-slider', {
  speed: 600,
  // mousewheel: true,
  navigation: {
    nextEl: '.hero-slider-button-next',
    prevEl: '.hero-slider-button-prev',
    disabledClass: 'hero-slider-button_disabled'
  }
});



export function slideParallax() {
  const slideImgs = [...document.querySelectorAll('.hero__img:not([data-parallax-init])')];
  slideImgs.forEach(img => {
    const parallaxInstance = new Parallax(img);
    parallaxInstance.friction(0.1, 0.1);
    parallaxInstance.limit(20, 20); // 20, 20
    parallaxInstance.scalar(2, 2); // 2, 2

    parallaxInstance.hoverOnly = true;

    img.setAttribute('data-parallax-init', '');
  });
}


documentLoaded(() => { 
  slideParallax();
  setTimeout(slideParallax, 2000)
});
