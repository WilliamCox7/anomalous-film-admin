const steps = [
  'action', 'type', 'title', 'season', 'episode',
  'viewed', 'location', 'rating', 'award', 'like', 'best'
];

export default function(skip) {
  let nextIndex = steps.indexOf(this.state.step) + 1;
  if (skip) nextIndex += skip;
  if (nextIndex === steps.length) this.props.toggleForm();
  else {
    let next = steps[nextIndex];
    this.setState({ step: next });
  }
}