import React, { Component } from 'react';
import Film from '../../components/Film';
import moment from 'moment';
import axios from 'axios';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      film: {
        poster: "",
        posterPos: "0px 0px",
        like: false,
        award: false,
        title: "",
        released: null,
        tagline: "",
        rating: "",
        imdb: "",
        viewed: new Date(),
        location: "",
        tmdbId: null,
        type: 'movie',
        season: "",
        episode: "",
        best: ""
      },
      results: [],
      posHor: 0,
      posVer: 0,
      lastResult: null,
      submissionType: 'review'
    }
    this.tmdbSearch = debounce(this.tmdbSearch.bind(this), 250);
    this.update = this.update.bind(this);
    this.updateSubType = this.updateSubType.bind(this);
    this.populate = this.populate.bind(this);
    this.position = this.position.bind(this);
    this.setHold = this.setHold.bind(this);
    this.cancelHold = this.cancelHold.bind(this);
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.getTVSeasonRating = this.getTVSeasonRating.bind(this);
  }

  update(e) {
    let field = e.target.name;
    let value = e.target.value;
    let newState = Object.assign({}, this.state);
    if (e.target.name === "viewed") {
      let viewDate = moment(e.target.value).toDate();
      newState.film[e.target.name] = viewDate;
    } else {
      newState.film[e.target.name] = e.target.value;
    }
    if (field === "type") {
      newState.film = {
        poster: "",
        posterPos: "0px 0px",
        like: false,
        award: false,
        title: this.state.film.title,
        released: null,
        tagline: "",
        rating: "",
        imdb: "",
        viewed: new Date(),
        location: "",
        tmdbId: null,
        type: value,
        season: "",
        episode: "",
        best: ""
      }
      newState.posHor = 0;
      newState.posVer = 0;
    }
    this.setState(newState, () => {
      if (this.state.film.type === 'tv-season' && this.state.film.poster && this.state.film.season) {
        this.getTVSeasonRating();
        if (field === "season") {
          let selection = Object.assign({}, this.state.film);
          selection.id = selection.tmdbId;
          this.populate(selection);
        }
      }
      if (this.state.film.type === 'tv-episode' && this.state.film.season && this.state.film.episode && (field === "season" || field === "episode")) {
        let selection = Object.assign({}, this.state.film);
        selection.id = selection.tmdbId;
        this.populate(selection);
      }
      if (field === "type" && this.state.film.title) {
        this.tmdbSearch(this.state.film.title);
      }
    });
  }

  updateSubType(e) {
    let newState = Object.assign({}, this.state);
    newState.submissionType = e.target.value;
    this.setState(newState);
  }

  updateSearch(e) {
    let title = e.target.value;
    let newState = Object.assign({}, this.state);
    newState.film.title = title;
    this.setState(newState, () => this.tmdbSearch(title))
  }
  
  tmdbSearch(title) {
    let queryStr = title.replace(" ", "+");
    let type = this.state.film.type.indexOf('tv') > -1 ? 'tv' : 'movie';
    let apiUrl = `https://api.themoviedb.org/3/search/${type}?api_key=98b81f5311c6ff008b592a0366f13a13&query=${queryStr}`;
    axios.get(apiUrl)
    .then((result) => {
      let newState = Object.assign({}, this.state);
      newState.results = result.data.results;
      this.setState(newState);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  populate(selection, fromTmdb) {
    let newState = Object.assign({}, this.state);
    axios.get(`/api/film/${selection.id}/${selection.season || newState.film.season || "undefined"}/${selection.episode || newState.film.season || "undefined"}/${newState.film.type}`)
    .then((result) => {
      if (result.data.length) {
        newState.film = result.data[0];
        document.getElementById("input-2").value = newState.film.rating;
        document.getElementById("input-4").value = newState.film.location;
      } else if (fromTmdb) {
        newState.film.poster = selection.poster_path;
        newState.film.like = false;
        newState.film.award = false;
        newState.film.title = selection.title || selection.name;
        newState.film.released = selection.release_date || selection.first_air_date;
        newState.film.tagline = selection.overview;
        newState.film.imdb = selection.vote_average;
        newState.film.tmdbId = selection.id;
        newState.film.viewed = new Date();
        newState.film.best = "";
        document.getElementById("input-2").value = "";
        newState.results = [];
        newState.lastResult = selection;
      } else {
        this.populate(newState.lastResult, true);
      }
      this.setState(newState, () => {
        if (this.state.film.type === 'tv-season' && this.state.film.poster && this.state.film.season) this.getTVSeasonRating();
      });
    });
  }

  position(dir, px) {
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
    this.setState(newState);
  }

  setHold(dir) {
    document.body.style["WebkitUserSelect"] = "none";
    this.hold = setInterval(() => {
      this.position(dir, 1);
    }, 50);
  }

  cancelHold() {
    document.body.style["WebkitUserSelect"] = "auto";
    if (this.hold) clearInterval(this.hold);
  }

  toggle(icon) {
    let newState = Object.assign({}, this.state);
    newState.film[icon] = !newState.film[icon];
    this.setState(newState);
  }

  save() {
    axios.post('/api/list', this.state.film)
    .then(() => {
      let newState = Object.assign({}, this.state);
      newState.film = {
        poster: "",
        posterPos: "0px 0px",
        like: false,
        award: false,
        title: "",
        released: null,
        tagline: "",
        rating: "",
        imdb: "",
        viewed: new Date(),
        location: "",
        tmdbId: null,
        type: this.state.film.type,
        season: "",
        episode: "",
        best: ""
      };
      newState.posHor = 0;
      newState.posVer = 0;
      this.setState(newState, () => {
        document.getElementById("input-2").value = "";
      });
    });
  }

  getTVSeasonRating() {
    axios.get(`/api/season-rating/${this.state.film.title}/${this.state.film.season}`)
    .then((result) => {
      let newState = Object.assign({}, this.state);
      newState.film.rating = result.data;
      this.setState(newState);
    });
  }

  render() {

    let results = this.state.results.splice(0);
    results = results.filter((film) => film.poster_path && film.backdrop_path);
    results = results.map((film, i) => {
      return (
        <div key={i} className="search-result flex jc-sb ai-c" 
          onClick={() => this.populate(film, true)}>
          <div className="poster-wrapper">
            <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} />
          </div>
          <div>{this.state.film.type === 'movie' ? film.title : film.name}</div>
          <div>{this.state.film.type === 'movie' ? film.release_date : film.first_air_date}</div>
        </div>
      );
    });

    results = results.splice(0, 7);

    return (
      <div id="Home">
        <div className="film-wrapper">
          <Film film={this.state.film} update={this.update} submissionType={this.state.submissionType} 
            tmdbSearch={this.updateSearch} toggle={this.toggle} updateSubType={this.updateSubType} />
          {results.length ? (
            <div className="search-results">
              {results}
            </div>
          ) : null}
          {this.state.film.poster ? (
            <div className="position-buttons">
              <div id="up-arrow" className="arrow flex jc-c ai-c" 
                onClick={() => this.position('up', 1)} onTouchStart={() => this.setHold('up')}
                onTouchEnd={this.cancelHold}>
                <div></div>↑
              </div>
              <div id="down-arrow" className="arrow flex jc-c ai-c" 
                onClick={() => this.position('down', 1)} onTouchStart={() => this.setHold('down')}
                onTouchEnd={this.cancelHold}>
                <div></div>↓
              </div>
              <div id="left-arrow" className="arrow flex jc-c ai-c" 
                onClick={() => this.position('left', 1)} onTouchStart={() => this.setHold('left')}
                onTouchEnd={this.cancelHold}>
                <div></div>←
              </div>
              <div id="right-arrow" className="arrow flex jc-c ai-c" 
                onClick={() => this.position('right', 1)} onTouchStart={() => this.setHold('right')}
                onTouchEnd={this.cancelHold}>
                <div></div>→
              </div>
            </div>
          ) : null}
          {this.state.film.tmdbId ? (
            <button onClick={this.save}>save</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};