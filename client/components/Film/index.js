// Packages
import React, { Component } from 'react';

// Components
import Poster from '../Poster';
import Content from '../Content';

// Film Class Materials
import methods from './methods';
import state from './state';
import './style.scss';

class Film extends Component {
  
  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }

  render() {
    return (
      <div id="Film">
        <button onClick={this.save}>save</button>
        <Poster film={this.props.film} />
        <Content film={this.props.film} />
      </div>
    );
  }
}

export default Film;