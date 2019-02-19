// Packages
import React, { Component } from 'react';

// Hexagon Class Materials
import { getHexStyle, getHexImageStyle } from './util';
import './style.scss';

class Hexagon extends Component {

  render() {
    return (
      <div className="Hexagon" style={getHexStyle(this.props.reflection)}>
        <div className="image-container">
          <div className="image" style={getHexImageStyle(this.props.film, this.props.reflection)}>
            {this.props.reflection ? (
              <div className="reflection"></div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Hexagon;