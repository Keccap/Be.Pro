import Swiper from 'Swiper';
import { documentLoaded } from '../helpers/functions';


documentLoaded(() => {
  const popularBlogsSlider = new Swiper('.popular-blogs-slider', {
    speed: 400,
    allowTouchMove: false,
    navigation: {
      nextEl: '.popular-blogs-button_button-next',
      prevEl: '.popular-blogs-button_button-prev'
    }
  });
});