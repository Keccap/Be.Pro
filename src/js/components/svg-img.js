import imgToSVG from './imgToSVG';
import { documentLoaded } from '../helpers/functions';


documentLoaded(() => {
  imgToSVG('.svg-img');
});