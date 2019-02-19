export default function() {
  this.setState({ isTrue: !this.state.isTrue }, () => {
    this.props.update(this.state.isTrue, this.props.name);
    let skip = 0;
    if (this.props.type !== 'movie' && this.props.name === 'like') skip = 1;
    this.props.next(skip);
  });
}