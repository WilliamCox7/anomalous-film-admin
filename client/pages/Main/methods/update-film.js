export default function(film) {
  let newState = Object.assign({}, this.state);
  newState.film = film;
  this.setState(newState);
}