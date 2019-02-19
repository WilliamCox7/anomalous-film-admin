export default function(action) {
  let newState = Object.assign({}, this.state);
  newState.action = action;
  this.setState(newState);
}