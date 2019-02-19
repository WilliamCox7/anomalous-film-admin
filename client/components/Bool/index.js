// Packages
import React, { Component } from 'react';

// Bool Class Materials
import { getAsset } from '../../modules';
import state from './state';
import methods from './methods';
import './style.scss';

class Bool extends Component {

  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }
  
  render() {

    let image = this.props.name === "award" ? "oscar" : "like";
    if (!this.state.isTrue) image += "-empty";

    return (
      <div className="Bool flex jc-c">
        <img onClick={this.toggle} src={getAsset(image)} />
      </div>
    );
  }
}

export default Bool;