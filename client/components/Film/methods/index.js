import save from './save';

export default function(film) {
  film.save = save.bind(film);
}