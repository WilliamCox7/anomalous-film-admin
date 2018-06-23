import { React, Component, autosize, withRouter, axios, connect } from '../../packages';
import { Thumbnail } from '../';
import { setUser } from '../../reducers/user';
import './style.scss';

class List extends Component {

  constructor() {
    super();
    this.state = {
      rating: "",
      thumbnail: "",
      work: ""
    }
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    axios.get('/auth').then((response) => {
      if (response.data === 'No User') {
        this.props.history.push('/login');
      }
    });
  }

  update(e) {
    var newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  add() {
    axios.post("/api/list", this.state).then((response) => {
      this.clearState();
    });
  }

  clearState() {
    this.setState({
      rating: "",
      thumbnail: "",
      work: ""
    });
  }

  render() {
    return (
      <div className="List">
        <div className="titles flex jc-sb">
          <input type="text" placeholder="Title" value={this.state.work} name="work"
            onChange={this.update} />
          <button onClick={this.add}>add +</button>
        </div>
        <div className="thumb-container flex jc-sb">
          <Thumbnail post={this.state} />
          <div className="thumb-input flex fd-c">
            <input type="text" value={this.state.thumbnail} name="thumbnail"
              onChange={this.update} placeholder="image url..." />
            <input type="text" placeholder="rating..." value={this.state.rating} name="rating"
              onChange={this.update} />
          </div>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
