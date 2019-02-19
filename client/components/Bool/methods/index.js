import toggle from './toggle';

export default function(bool) {
  bool.toggle = toggle.bind(bool);
}