export default function(ten) {
  let newState = Object.assign({}, this.state);
  newState.tens = ten.toString();
  newState.rating = newState.ones + "." + ten.toString();
  this.setState(newState, () => {
    this.props.update(Number(this.state.rating), 'rating');
    this.props.next();
  });
}