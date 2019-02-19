import select from './select';

export default function(dates) {
  dates.select = select.bind(dates);
}