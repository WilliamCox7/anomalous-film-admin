export default function(dir, px) {
  let posHor = this.state.posHor;
  let posVer = this.state.posVer;
  if (dir === 'up') {
    posVer -= px;
  } else if (dir === 'down') {
    posVer += px;
  } else if (dir === 'left') {
    posHor -= px;
  } else if (dir === 'right') {
    posHor += px;
  }
  let newState = Object.assign({}, this.state);
  newState.film.posterPos = `${posHor}px ${posVer}px`;
  newState.posHor = posHor;
  newState.posVer = posVer;
  this.setState(newState, () => {
    this.props.updateFilm(this.state.film);
  });
}