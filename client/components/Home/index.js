import { React, Component, withRouter, axios, connect } from '../../packages';
import { setPost } from '../../reducers/post';
import { setUser } from '../../reducers/user';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    axios.get('/auth').then((response) => {
      if (response.data === 'No User') {
        this.props.history.push('/login');
      } else {
        this.props.setUser(response.data[0]);
        axios.get('/post/:' + this.props.user.id).then((response) => {
          this.props.setPost(response.data);
        });
      }
    });
  }

  render() {
    return (
      <div className="Home">
        <div>Home</div>
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
  setPost: setPost,
  setUser: setUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
