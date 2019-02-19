export default function(one) {
  let newState = Object.assign({}, this.state);
  newState.ones = one.toString();
  if (one.toString() === "10") newState.tens = "0";
  if (newState.tens) newState.rating = one.toString() + "." + newState.tens;
  else newState.rating = one.toString();
  this.setState(newState, () => {
    if (one.toString() === "10") {
      this.props.update(Number(this.state.rating), 'rating');
      this.props.next();
    }
  });
}