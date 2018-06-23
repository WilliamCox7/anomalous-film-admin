import { React, Component, BrowserRouter, Switch, Route } from './packages';
import { Home, Login, Nav, List } from './components';
import './reset.scss';
import './main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
