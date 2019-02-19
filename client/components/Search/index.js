// Packages
import React, { Component } from 'react';

// Search Class Materials
import state from './state';
import methods from './methods';
import './style.scss';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }

  render() {

    let color = "green";
    if (this.state.input) color = "gold";

    let results = [];
    if (this.props.name !== "location") {
      let resultsType = "films";
      if (this.props.name === "season") resultsType = "seasons";
      else if (this.props.name === "episode") resultsType = "episodes";
      results = this.buildOptions(this.props.results[resultsType]);
    }

    let recentType = this.props.type.indexOf("tv") > -1 ? "tv-series" : "movies";
    if (this.props.name === "location") recentType = "locations";
    let recent = this.buildOptions(this.props.recent[recentType]);

    return (
      <div className="Search">
        {this.props.name === "title" ? (
          <input className={color} type="text" name={this.props.name} 
            placeholder={this.props.name} onChange={(e) => this.search(e.target.value)} />
        ) : null}
        {this.props.name === "location" ? (
          <input className={color} type="text" name={this.props.name} 
            placeholder={this.props.name} onChange={(e) => this.updateLocation(e.target.value)} />
        ) : null}
        {results.length ? (
          <div className="search-results">
            {results}
          </div>
        ) : (
          <div className="recent-results">
            <h1 className="search-h1">recent:</h1>
            {recent}
          </div>
        )}
      </div>
    );
  }
}

export default Search;