export default function() {
  this.setState({ isTrue: !this.state.isTrue }, () => {
    this.props.update(this.state.isTrue, this.props.name);
    let skip = this.props.name === "like" ? 1 : 0;
    this.props.next(skip);
  });
}