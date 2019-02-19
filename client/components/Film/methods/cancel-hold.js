export default function() {
  document.body.style["WebkitUserSelect"] = "auto";
  if (this.hold) clearInterval(this.hold);
}