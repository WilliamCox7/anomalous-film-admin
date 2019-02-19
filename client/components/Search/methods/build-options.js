// Packages
import React from 'react';

export default function(options) {
  if (this.props.name === 'title') return buildFilmOptions(this, options);
  else if (this.props.name === 'season') return buildSeasonOptions(this, options);
  else if (this.props.name === 'episode') return buildEpisodeOptions(this, options);
  else if (this.props.name === 'location') return buildLocOptions(this, options);
}

function buildFilmOptions(srch, options) {
  options = options.filter((film) => film.poster_path);
  return options.map((film, i) => {
    return (
      <div key={i} className="search-result flex jc-sb ai-c" 
        onClick={() => srch.select(film, i)}>
        <div className="poster-wrapper">
          <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} />
        </div>
        <div>{srch.props.type === 'movie' ? film.title : film.name}</div>
        <div>{srch.props.type === 'movie' ? film.release_date : film.first_air_date}</div>
      </div>
    );
  });
}

function buildSeasonOptions(srch, options) {
  options = options.filter((film) => film.poster_path && film.season_number > 0);
  return options.map((film, i) => {
    return (
      <div key={i} className="search-result flex jc-sb ai-c" 
        onClick={() => srch.select(film, i)}>
        <div className="poster-wrapper">
          <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} />
        </div>
        <div>{film.name}</div>
        <div>{film.air_date}</div>
      </div>
    );
  });
}

function buildEpisodeOptions(srch, options) {
  return options.map((film, i) => {
    return (
      <div key={i} className="search-result flex jc-sb ai-c" 
        onClick={() => srch.select(film, i)}>
        <div className="poster-wrapper">
          <img src={`http://image.tmdb.org/t/p/w500/${srch.props.poster}`} />
        </div>
        <div>E{film.episode_number}: {film.name}</div>
        <div>{film.air_date}</div>
      </div>
    );
  });
}

function buildLocOptions(srch, options) {
  return options.map((loc, i) => {
    return (
      <div key={i} className="loc-result" onClick={() => srch.select(loc)}>
        <h1 className="search-h1">{loc}</h1>
      </div>
    );
  });
}