import validForm from './valid-form';
import updateFilm from './update-film';
import toggleForm from './toggle-form';
import updateAction from './update-action';

export default function(main) {
  main.validForm = validForm.bind(main);
  main.updateFilm = updateFilm.bind(main);
  main.toggleForm = toggleForm.bind(main);
  main.updateAction = updateAction.bind(main);
}