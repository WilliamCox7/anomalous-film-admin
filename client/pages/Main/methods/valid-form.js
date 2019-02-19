export default function() {
  let film = Object.assign({}, this.state.film);
  switch(film.type) {
    case 'movie': return movieValidation(film);
    case 'tv-episode': return tvEpisodeValidation(film);
    case 'tv-season': return tvSeasonValidation(film);
    case 'tv-series': return tvSeriesValidation(film);
    default: return false;
  }
}

function movieValidation(film) {
  // remove non-required fields
  delete film.like;
  delete film.award;
  delete film.season;
  delete film.episode;
  delete film.best;

  return isTruthy(film);
}

function tvEpisodeValidation(film) {
  // remove non-required fields
  delete film.like;
  delete film.award;
  delete film.best;

  return isTruthy(film);
}

function tvSeasonValidation(film) {
  // remove non-required fields
  delete film.like;
  delete film.award;
  delete film.episode;
  delete film.best;

  return isTruthy(film);
}

function tvSeriesValidation(film) {
  // remove non-required fields
  delete film.like;
  delete film.award;
  delete film.season;
  delete film.episode;
  delete film.best;

  return isTruthy(film);
}

function isTruthy(film) {
  Object.keys(film).forEach((property) => {
    if (!film[property]) return false;
  });
  return true;
} 