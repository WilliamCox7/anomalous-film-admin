import select from './select';
import onScroll from './on-scroll';
import buildOptionsClass from './build-options-class';

export default function(sel) {
  sel.select = select.bind(sel);
  sel.onScroll = onScroll.bind(sel);
  sel.buildOptionsClass = buildOptionsClass.bind(sel);
}