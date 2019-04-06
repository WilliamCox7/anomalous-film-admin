export default function getHexStyle(reflection) {
  let style = {};
  if (reflection) style = {
    marginTop: "400px",
    transform: "scaleX(-1) rotate(180deg)",
    opacity: ".2",
    height: "300px"
  };
  return style;
}