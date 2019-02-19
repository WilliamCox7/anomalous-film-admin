export default function(option) {
  this.setState({selection: option}, () => {
    this.props.update(this.state.selection, this.props.name);
    this.props.next();
  });
}