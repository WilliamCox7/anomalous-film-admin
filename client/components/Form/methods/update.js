export default function(value, name) {
  if (name === "action") {
    this.props.updateAction(value);
  } else {
    let newState = Object.assign({}, this.state);
    newState.film[name] = value;
    this.setState(newState, () => this.props.updateFilm(this.state.film));
  }
}