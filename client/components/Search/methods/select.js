// Packages
import axios from 'axios';

export default function(item, i) {

  let results;
  
  if (this.props.name === 'title') {
    let type = this.props.type.indexOf('tv') > -1 ? 'tv-series' : 'movies';
    manageLocalStorage(item, this.props.recent, type);

    let newState = Object.assign({}, this.state);
    newState.input = item.title || item.name;

    results = this.props.results;
    results.films = [];

    this.setState(newState, () => {
      this.props.update(this.state.input, this.props.name);
      this.props.update(item.id, 'tmdbId');
      this.props.updateResults(results);
      if (this.props.type.indexOf('tv') > -1 && this.props.type !== 'tv-series') {
        getSeasons(this, item.id);
      } else {
        this.props.update(item.poster_path, 'poster');
        this.props.update(item.vote_average, 'imdb');
        if (this.props.type === 'tv-series') this.props.update(item.first_air_date, 'released');
        else this.props.update(item.release_date, 'released');
        this.props.next(2);
      }
    });
  }
  
  else if (this.props.name === 'season') {

    let newState = Object.assign({}, this.state);
    newState.input = i + 1;
    
    results = this.props.results;
    results.seasons = [];

    this.setState(newState, () => {
      this.props.update(this.state.input, this.props.name);
      this.props.update(item.poster_path, 'poster');
      this.props.updateResults(results);
      if (this.props.type === 'tv-episode') {
        getEpisodes(this, this.props.tmdbId, this.state.input);
      } else {
        this.props.update(item.air_date, 'released');
        axios.get(`/api/season-rating/${this.props.tmdbId}/${this.state.input}`)
        .then((result) => {
          this.props.update(result.data.rating, 'rating');
          this.props.update(result.data.imdb, 'imdb');
          this.props.update(result.data.posterPos, 'posterPos');
        });
        this.props.next(1);
      }
    });
  } 
  
  else if (this.props.name === 'episode') {

    let newState = Object.assign({}, this.state);
    newState.input = i + 1;

    results = this.props.results;
    results.episodes = [];

    this.setState(newState, () => {
      this.props.update(this.state.input, this.props.name);
      this.props.update(item.air_date, 'released');
      this.props.update(item.vote_average, 'imdb');
      this.props.updateResults(results);
      this.props.next();
    });
  }

  else if (this.props.name === 'location') {
    manageLocalStorage(item, this.props.recent, 'locations');

    let newState = Object.assign({}, this.state);
    newState.input = item;

    results = this.props.results;
    results.locations = [];

    this.setState(newState, () => {
      this.props.update(this.state.input, this.props.name);
      this.props.updateResults(results);
      let skip = this.props.type === "tv-season" ? 1 : 0;
      this.props.next(skip);
    });
  }

}

function manageLocalStorage(item, recent, type) {
  if (!recent[type].find((i) => i.id === item.id)) {
    recent[type] = maintainFive(recent[type], item);
    recent = JSON.stringify(recent);
    localStorage.setItem('recent', recent);
  }
}

function maintainFive(arr, item) {
  if (arr.length > 4) arr.shift();
  arr.push(item);
  return arr;
}

function getSeasons(srch, id) {
  let apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=98b81f5311c6ff008b592a0366f13a13`;
  
  axios.get(apiUrl)
  .then((result) => {
    let results = srch.props.results;
    results.seasons = result.data.seasons;
    srch.props.updateResults(results);
    srch.props.next();
  })
  .catch((err) => console.error(err));
}

function getEpisodes(srch, id, season) {
  let apiUrl = `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=98b81f5311c6ff008b592a0366f13a13`;
  
  axios.get(apiUrl)
  .then((result) => {
    let results = srch.props.results;
    results.episodes = result.data.episodes;
    srch.props.updateResults(results);
    srch.props.next();
  })
  .catch((err) => console.error(err));
}