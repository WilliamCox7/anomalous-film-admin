// Packages
import React, { Component } from 'react';

// Components
import Hexagon from '../Hexagon';
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
        <button onClick={this.save}>save</button>
        <Hexagon film={this.props.film} />
        <Hexagon film={this.props.film} reflection />
        <Content film={this.props.film} />
      </div>
    );
  }
}

export default Film;