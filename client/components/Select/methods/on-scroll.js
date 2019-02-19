export default function(e) {
  let topInset = e.target.scrollTop > 0;
  let botInset = e.target.scrollTop < (e.target.scrollHeight - e.target.offsetHeight);
  this.setState({ topInset: topInset, botInset: botInset });
}