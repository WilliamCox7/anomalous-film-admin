export default function(results) {
  let newState = Object.assign({}, this.state);
  newState.results = results;
  this.setState(newState);
}