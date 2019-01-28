export default function getHexStyle(reflection) {
  let style = {};
  if (reflection) style = {
    marginTop: "280px",
    transform: "rotate(300deg)",
    opacity: ".2"
  };
  return style;
}