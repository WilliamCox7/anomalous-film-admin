import search from './search';
import buildOptions from './build-options';
import select from './select';
import updateLocation from './update-location';

export default function(srch) {
	srch.search = debounce(search.bind(srch), 250);
	srch.buildOptions = buildOptions.bind(srch);
	srch.select = select.bind(srch);
	srch.updateLocation = debounce(updateLocation.bind(srch), 250);
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};