import React, { Component } from 'react';
import { getHexStyle } from './util';
import './style.scss';

class Poster extends Component {

  render() {
    return (
      <div className="Poster" style={getHexStyle(this.props.reflection)}>
        <img src={`http://image.tmdb.org/t/p/w500${this.props.film.poster}`} />
        {/* {this.props.reflection ? (
          <div className="reflection"></div>
        ) : null} */}
      </div>
    );
  }
}

export default Poster;
