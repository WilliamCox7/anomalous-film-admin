// Packages
import React, { Component } from 'react';

// Graph Class Materials
import './style.scss';

class Graph extends Component {

  render() {
    return (
      <div className="Graph">
        <div className="bar">
          <div className="rating-bar" style={{width: `${((this.props.film.rating / 10) * 100).toFixed(1)}%`}}>
            {this.props.film.rating ? Number(this.props.film.rating).toFixed(1) : 0}
          </div>
        </div>
        <div className="bar">
          <div className="imdb-bar" style={{width: `${((this.props.film.imdb / 10) * 100).toFixed(1)}%`}}>
            {this.props.film.imdb ? Number(this.props.film.imdb).toFixed(1) : 0}
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
