// Packages
import React, { Component } from 'react';

// Rate Class Materials
import state from './state';
import methods from './methods';
import './style.scss';

class Rate extends Component {

  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }

  render() {

    let ones = [1,2,3,4,5,6,7,8,9,10], tens = [0,1,2,3,4,5,6,7,8,9];
    ones = ones.map((i) => {
      let onesClass = "box flex jc-c ai-c";
      if (i === Number(this.state.ones)) onesClass += " active";
      return (
        <div key={i} className={onesClass} onClick={() => this.selectOne(i)}>{i}</div>
      );
    })
    tens = tens.map((i) => {
      let tensClass = "box flex jc-c ai-c";
      if (this.state.tens !== "" && i === Number(this.state.tens)) tensClass += " active";
      return (
        <div key={i} className={tensClass} onClick={() => this.selectTen(i)}>.{i}</div>
      );
    });
    tens = tens.filter((t, i) => this.state.ones !== "10" || i === 0);

    return (
      <div className="Rate">
        <div className="ones-container flex jc-sb">
          {ones}
        </div>
        <div className="tens-container flex jc-sb">
          {tens}
        </div>
        {this.state.rating ? (
          <h1 className="rate-h1">{this.state.rating}</h1>
        ) : null}
      </div>
    );
  }
}

export default Rate;