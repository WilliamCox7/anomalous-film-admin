import { React, Component, Link, connect, withRouter, axios } from '../../packages';
import { logo } from '../../assets';
import './style.scss';

class Nav extends Component {

  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios.get('/auth/logout').then((response) => {
      if (response.data === 'Logged Out') {
        this.props.history.push('/login');
      }
    });
  }

  render() {

    let show = window.location.pathname !== '/login';

    return (
      <div className="Nav flex jc-c" style={show ? null : {display: "none"}}>
        <div className="nav-container flex jc-sb ai-c">

          <section>
            <Link to="/" className="logo-link flex ai-c">
              <span className="logo-text">anomalous</span>
              <img src={logo} alt="logo" />
              <span className="logo-text">film</span>
            </Link>
          </section>

          <section onClick={this.logout} className="logout">Logout</section>

        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
