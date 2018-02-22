import { React, Component, withRouter, axios, connect, debounce } from '../../packages';
import { Section, Thumbnail } from '../';
import { setUser } from '../../reducers/user';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
    this.state = emptyState;
    this.addSection = this.addSection.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubTitle = this.updateSubTitle.bind(this);
    this.updateYoutubeId = this.updateYoutubeId.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
    this.publish = this.publish.bind(this);
    this.save = debounce(this.save.bind(this), 350);
  }

  componentDidMount() {
    axios.get('/auth').then((response) => {
      if (response.data === 'No User') {
        this.props.history.push('/login');
      } else {
        this.props.setUser(response.data[0]);
        axios.get('/post').then((response) => {
          delete response.data[0]._id;
          this.setState(response.data[0]);
        });
      }
    });
  }

  addSection() {
    var newState = Object.assign({}, this.state);
    newState.sections.push({
      title: "",
      youtubeId: "",
      content: [ "" ]
    });
    this.setState(newState, () => {
      this.save();
    });
  }

  updateWork(e) {
    var newState = Object.assign({}, this.state);
    newState.work = e.target.value;
    this.setState(newState, () => {
      this.save();
    });
  }

  updateTitle(e) {
    var newState = Object.assign({}, this.state);
    newState.title = e.target.value;
    this.setState(newState, () => {
      this.save();
    });
  }

  updateSubTitle(e, index) {
    var newState = Object.assign({}, this.state);
    newState.sections[index].title = e.target.value;
    this.setState(newState, () => {
      this.save();
    });
  }

  updateYoutubeId(e, index) {
    var newState = Object.assign({}, this.state);
    newState.sections[index].youtubeId = e.target.value;
    this.setState(newState, () => {
      this.save();
    });
  }

  updateContent(e, sectionIndex, contentIndex) {
    var newState = Object.assign({}, this.state);
    var content = newState.sections[sectionIndex].content;
    newState.sections[sectionIndex].content[contentIndex] = e.target.value;
    if (contentIndex === content.length - 1) {
      newState.sections[sectionIndex].content.push("");
    }
    newState.sections[sectionIndex].content = content.filter((paragraph, i) => {
      if (paragraph !== "") {
        return true;
      } else {
        if (i === content.length - 1) {
          return true;
        }
      }
    });
    this.setState(newState, () => {
      this.save();
    });
  }

  updateThumbnail(e) {
    var newState = Object.assign({}, this.state);
    newState.thumbnail = e.target.value;
    this.setState(newState, () => {
      this.save();
    });
  }

  save() {
    axios.put("/post", this.state);
  }

  publish() {
    axios.post("/post", this.state);
    this.setState(emptyState, () => {
      this.save();
    });
  }

  render() {

    let sections = this.state.sections.map((section, i) => {
      return (
        <Section section={section} key={i} index={i} updateSubTitle={this.updateSubTitle}
          updateYoutubeId={this.updateYoutubeId} updateContent={this.updateContent} />
      );
    });

    return (
      <div className="Home flex fd-c">
        <Thumbnail post={this.state} updateThumbnail={this.updateThumbnail} />
        <div className="titles flex jc-sb">
          <input type="text" placeholder="Work" value={this.state.work} onChange={this.updateWork} />
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.updateTitle} />
        </div>
        <div className="content">
          {sections}
        </div>
        <div className="add-section">
          <button onClick={this.addSection}>Add Section</button>
          <button onClick={this.publish}>Publish</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

const emptyState = {
  "work": "",
  "title": "",
  "thumbnail": "",
  "sections": [
    {
      "title": "",
      "youtubeId": "",
      "content": [ "" ]
    }
  ]
}
