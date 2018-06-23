import { React, Component, autosize, withRouter, axios, connect } from '../../packages';
import { Thumbnail } from '../';
import { setUser } from '../../reducers/user';
import { addToList } from '../../reducers/list';
import './style.scss';

class List extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      thumbnail: "",
      note: "",
      rating: "",
      isEditing: false
    }
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    var textarea = document.getElementById("note-textarea");
    autosize(textarea);
    axios.get('/auth').then((response) => {
      if (response.data === 'No User') {
        this.props.history.push('/login');
      }
    });
  }

  update(e) {
    var newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    newState.isEditing = true;
    this.setState(newState);
  }

  add() {
    axios.post("/api/list", this.state).then((response) => {
      this.props.addToList(this.state);
      this.clearState();
    });
  }

  clearState() {
    this.setState({
      title: "",
      thumbnail: "",
      note: "",
      rating: "",
      isEditing: false
    });
  }

  render() {

    let list = this.props.list.list.map((item, i) => {
      return (
        <div className="list-item flex jc-sb" key={i}>
          <Thumbnail post={item} />
          <div className="info flex fd-c">
            <h1>{item.rating}%</h1>
            <p>{item.note}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="List">
        <div className="titles flex jc-sb">
          <input type="text" placeholder="Title" value={this.state.title} name="title"
            onChange={this.update} />
          <button onClick={this.add}>add +</button>
        </div>
        <div className="thumb-container flex jc-sb">
          <Thumbnail post={this.state} />
          <div className="thumb-input flex fd-c">
            <input type="text" value={this.state.thumbnail} name="thumbnail"
              onChange={this.update} placeholder="image url..." />
            <input type="text" value={this.state.rating} name="rating"
              onChange={this.update} placeholder="rating..." />
            <textarea id="note-textarea" placeholder="note..." name="note"
              onChange={this.update} value={this.state.note}></textarea>
          </div>
        </div>
        <div className="list-items">
          {this.state.isEditing ? (
            <div className="list-item flex jc-sb">
              <Thumbnail post={this.state} />
              <div className="info flex fd-c">
                <h1>{this.state.rating}%</h1>
                <p>{this.state.note}</p>
              </div>
            </div>
          ) : null}
          {list}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    list: state.list
  }
}

const mapDispatchToProps = {
  setUser: setUser,
  addToList: addToList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
