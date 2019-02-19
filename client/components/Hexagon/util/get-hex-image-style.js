export default function getHexImageStyle(film, reflection) {
  let style = {};
  if (film.poster) style.backgroundImage = `url(http://image.tmdb.org/t/p/w500${film.poster})`;
  let position = film.posterPos;
  if (position && reflection) {
    if (position[0] === "-") position = position.substring(1, position.length);
    else position = "-" + position;
  }
  if (position) style.backgroundPosition = position;
  return style;
}