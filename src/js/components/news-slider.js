import Swiper from 'swiper/dist/js/swiper';



const newsSlider = new Swiper('.news-slider', {
  speed: 600,
  loop: true,
  pagination: {
    el: '.news-slider__pagination',
  },
  navigation: {
    nextEl: '.news-slider__button-next',
    prevEl: '.news-slider__button-prev',
  }
});