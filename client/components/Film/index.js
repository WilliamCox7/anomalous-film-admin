import React, { Component } from 'react';
import Hexagon from './sub/Hexagon';
import Content from './sub/Content';
import moment from 'moment';
import './style.scss';

class Film extends Component {

  render() {

    let placeholder = "search for a movie here...";
    if (this.props.type === "tvshow") placeholder = "search for a tv show here...";
    let viewDate = moment(this.props.film.viewed).format("YYYY-MM-DD")

    return (
      <div className="Film">
        <div className="form">
          <div className="form-section flex jc-sb">
            <input id="input-1" className="green" type="text"
              placeholder={placeholder} onChange={this.props.tmdbSearch} />
            <select id="select-1" className="gold" value={this.props.type}
              onChange={this.props.update} name="type">
              <option value="movie">movie</option>
              <option value="tvshow">tv show</option>
            </select>
            <input id="input-2" className="green" type="text" placeholder="0.0" 
              onChange={this.props.update} name="rating" />
          </div>
          <div className="form-section flex jc-sb">
            <input id="input-3" className="gold" type="date" onChange={this.props.update}
            value={viewDate} name="viewed" />
            <input id="input-4" className="tomato" type="text" placeholder="where did you watch?" 
              onChange={this.props.update} name="location" value={this.props.film.location} />
          </div>
        </div>
        <Hexagon film={this.props.film} />
        <Hexagon film={this.props.film} reflection />
        <Content film={this.props.film} toggle={this.props.toggle} />
      </div>
    );
  }
}

export default Film;