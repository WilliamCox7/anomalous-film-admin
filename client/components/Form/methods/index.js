import getPrompt from './get-prompt';
import buildSelectionInterface from './build-selection-interface';
import getRecent from './get-recent';
import update from './update';
import next from './next';
import updateResults from './update-results';

export default function(form) {
  form.getPrompt = getPrompt.bind(form);
  form.buildSelectionInterface = buildSelectionInterface.bind(form);
  form.getRecent = getRecent.bind(form);
  form.update = update.bind(form);
  form.next = next.bind(form);
  form.updateResults = updateResults.bind(form);
}