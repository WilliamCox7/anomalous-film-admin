// Packages
import axios from 'axios';

export default function() {
  axios.post(`/api/${this.props.action}`, this.state.film)
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
      this.props.updateFilm(this.state.film);
      this.props.toggleForm();
    });
  });
}