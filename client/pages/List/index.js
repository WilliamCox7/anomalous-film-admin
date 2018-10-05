import React, { Component } from 'react';
import axios from 'axios';
import ItemInformation from '../../components/ItemInformation';
import { ChromePicker } from 'react-color';
import './style.scss';

class List extends Component {

  constructor() {
    super();
    this.state = {
      background: "",
      gradient: "",
      plot: "",
      imdb: "",
      rating: "",
      released: "",
      title: ""
    }
    this.update = this.update.bind(this);
    this.omdb = this.omdb.bind(this);
    this.updateGradient = this.updateGradient.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  componentDidMount() {
    document.addEventListener("touchmove", (e) => {
      e.preventDefault();
    }, {passive: false});
  }

  update(e) {
    let newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  omdb(e) {
    axios.get(`http://www.omdbapi.com/?apikey=35dd15b5&t=${e.target.value}`)
    .then((response) => {
      this.setState({
        plot: response.data.Plot,
        imdb: response.data.imdbRating,
        released: response.data.Released,
        title: response.data.Title
      });
    });
  }

  addToList() {
    axios.post('/api/list', this.state)
    .then(() => this.setState({
      background: "",
      gradient: "",
      plot: "",
      imdb: "",
      rating: "",
      released: "",
      title: ""
    }, () => {
      document.getElementById('omdb').value = "";
    }));
  }

  updateGradient(color) {
    this.setState({gradient: color.hex});
  }

  render() {
    return (
      <div id="List">
        <div className="list-item">
          <div className="form flex fd-c">
            <input type="text" value={this.state.background} name="background" placeholder="image url..." onChange={this.update} />
            <input id="omdb" type="text" placeholder="search movie or tv show..." onChange={this.omdb} />
          </div>
          <ChromePicker color={this.state.gradient} onChange={this.updateGradient} />
          <img className="background-img" src={this.state.background} />
          <div className="gradient-overlay" style={{
            backgroundImage: `linear-gradient(45deg, ${this.state.gradient} 20%, transparent)`
          }}></div>
          <div className="gradient-overlay" style={{
            backgroundImage: `linear-gradient(325deg, black 10%, transparent)`
          }}></div>
          <ItemInformation item={this.state} update={this.update} />
          <button className="add-button" onClick={this.addToList}>+</button>
        </div>
      </div>
    );
  }
}

export default List;
