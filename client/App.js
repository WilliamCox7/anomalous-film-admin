import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import List from './pages/List';
import './reset.scss';
import './main.scss';
import './skeleton.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
