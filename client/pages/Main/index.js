// Packages
import React, { Component } from 'react';

// Components
import Film from '../../components/Film';
import Form from '../../components/Form';

// Main Class Materials
import methods from './methods';
import state from './state';
import './style.scss';

class Main extends Component {

  constructor() {
    super();
    this.state = state();
    methods(this);
  }

  render() {
    return (
      <main>
        {this.validForm() && !this.state.showForm ? (
          <Film film={this.state.film} action={this.state.action} updateFilm={this.updateFilm}
            toggleForm={this.toggleForm} />
        ) : (
          <Form film={this.state.film} action={this.state.action} updateAction={this.updateAction} 
            updateFilm={this.updateFilm} toggleForm={this.toggleForm} />
        )}
      </main>
    );
  }
}

export default Main;