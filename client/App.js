import { React, Component, connect, axios, BrowserRouter, Switch, Route } from './packages';
import { Home, Login } from './components';
import { setPost } from './reducers/post';
import './reset.scss';
import './main.scss';

class App extends Component {

  componentDidMount() {
    axios.get('/post').then((response) => {
      this.props.setPost(response.data);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  setPost: setPost
}

export default connect(null, mapDispatchToProps)(App);
