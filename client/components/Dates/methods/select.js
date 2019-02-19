export default function(e) {
  this.props.update(e.target.value, this.props.name);
}