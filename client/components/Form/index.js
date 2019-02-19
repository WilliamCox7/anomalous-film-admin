// Packages
import React, { Component } from 'react';

// Form Class Materials
import { getAsset } from '../../modules';
import state from './state';
import methods from './methods';
import './style.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = state(props);
    methods(this);
  }

  componentDidMount() {
    let newState = Object.assign({}, this.state);
    newState.recent = this.getRecent();
    this.setState(newState);
  }

  render() {

    let selectionInterface = this.buildSelectionInterface();
    let prompt = this.getPrompt(this.state.step);

    return (
      <section id="Form" className="screen-container">
        <h1 className="form-h1">{prompt}</h1>
        {selectionInterface}
        <div></div>
        <div className="next-button flex" onClick={() => this.next()}>
          next <img src={getAsset('right-arrow')} />
        </div>
      </section>
    );
  }
}

export default Form;