// Packages
import React, { Component } from 'react';

// Select Class Materials
import state from './state';
import methods from './methods';
import { getAsset } from '../../modules';
import './style.scss';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }

  render() {

    let options = this.props.options.map((option, i) => {
      let style = {};
      if (option === this.state.selection) style.color = "#FFC400";
      return (
        <h2 className="select-h2" key={i} style={style}
          onClick={() => this.select(option)}>
          {option}
        </h2>
      );
    });

    let ocClass = this.buildOptionsClass(options.length);

    return (
      <div className="Select">
        <div className="selected-container flex ai-c jc-c">
          <h1 className="select-h1">{this.state.selection}</h1>
          <img src={getAsset('yellow-hex')} />
        </div>
        <div className={ocClass} onScroll={this.onScroll}>
          {options}
        </div>
      </div>
    );
  }
}

export default Select;