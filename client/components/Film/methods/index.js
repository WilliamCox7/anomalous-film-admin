import setHold from './set-hold';
import position from './position';
import cancelHold from './cancel-hold';
import save from './save';

export default function(film) {
  film.setHold = setHold.bind(film);
  film.position = position.bind(film);
  film.cancelHold = cancelHold.bind(film);
  film.save = save.bind(film);
}