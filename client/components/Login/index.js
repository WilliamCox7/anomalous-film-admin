import { React, Component, axios, withRouter, connect } from '../../packages';
import { setUser } from '../../reducers/user';
import './style.scss';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.update = this.update.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    axios.post("/auth/login", this.state).then((response) => {
      this.props.setUser(response.data[0]);
      this.props.history.push('/')
    });
  }

  update(e) {
    var newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="Login flex jc-c ai-c fd-c">
        <input type="text" placeholder="username" name="username" onChange={this.update} />
        <input type="password" placeholder="password" name="password" onChange={this.update} />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
