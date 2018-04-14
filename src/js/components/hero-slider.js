import Swiper from 'swiper/dist/js/swiper';
import Parallax from 'parallax-js';




const heroSlider = new Swiper('.hero-slider', {
  speed: 600,
  mousewheel: true,
  navigation: {
    nextEl: '.hero-slider-button-next',
    prevEl: '.hero-slider-button-prev',
    disabledClass: 'hero-slider-button_disabled'
  }
});




const slides = [...document.querySelectorAll('.hero__img')];
slides.forEach(slide => {
  const parallaxInstance = new Parallax(slide);
  parallaxInstance.friction(0.1, 0.1);
  parallaxInstance.limit(20, 20); // 20, 20
  parallaxInstance.scalar(2, 2); // 2, 2

  parallaxInstance.hoverOnly = true;
});


export default heroSlider;