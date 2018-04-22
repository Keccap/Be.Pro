import Swiper from 'Swiper';
import { documentLoaded } from '../helpers/functions';



documentLoaded(() => {
  const newsSlider = new Swiper('.partners-carousel', {
    speed: 600,
    slidesPerView: 4,
    navigation: {
      nextEl: '.partners-carousel__button-next',
      prevEl: '.partners-carousel__button-prev',
      disabledClass: 'partners-carousel-button_disabled'
    },

    breakpoints: {
      400: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      }
    }
  });
})