export default function(location) {
  this.props.update(location, 'location');
  let recent = this.props.recent;
  recent.locations[0] = location;
  recent = JSON.stringify(recent);
  localStorage.setItem('recent', recent);
}