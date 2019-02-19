export default function(dir) {
  document.body.style["WebkitUserSelect"] = "none";
  this.hold = setInterval(() => this.position(dir, 1), 50);
}