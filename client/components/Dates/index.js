// Packages
import React, { Component } from 'react';
import moment from 'moment';

// Dates Class Materials
import methods from './methods';
import './style.scss';

class Dates extends Component {

  constructor() {
    super();
    methods(this);
  }

  render() {
    return (
      <div className="Dates">
        <input type="date" defaultValue={moment().format("YYYY-MM-DD")} 
          name={this.props.name} onChange={this.select} />
      </div>
    );
  }
}

export default Dates;