import { React, Component, YouTube } from '../../packages';
import { TextArea } from '../';
import { logoGray } from '../../assets';
import './style.scss';

class Section extends Component {

  constructor() {
    super();
  }

  render() {

    let section = this.props.section;
    let content = section.content.map((paragraph, i) => {
      return (
        <TextArea paragraph={paragraph} key={i} index={i} sectionIndex={this.props.index} id={"textarea" + i}
          updateContent={this.props.updateContent} italic={paragraph === ""} />
      )
    });

    return (
      <div className="Section">
        <input type="text" placeholder="Title" value={section.title} onChange={(e) => this.props.updateSubTitle(e, this.props.index)} />
        <div className="youtube-container">
          {section.youtubeId ? (
            <YouTube id={section.youtubeId} videoId={section.youtubeId}
              opts={{ playerVars: { mute: 1, rel: 0, controls: 0,
              showinfo: 0, cc_load_policy: 1 }}}
              onReady={() => reveal(section.youtubeId, this.props.first, this.props.shown)} />
          ) : null}
          <img src={logoGray} />
          <div className="youtube-overlay">
            <input style={{padding: "10px"}} type="text" placeholder="Youtube Id" value={section.youtubeId}
              onChange={(e) => this.props.updateYoutubeId(e, this.props.index)} />
          </div>
        </div>
        <div className="content-container">{content}</div>
      </div>
    );
  }
}

export default Section;

function reveal(youtubeId, first, shown) {
  if (youtubeId) {
    document.getElementById(youtubeId).style.opacity = 1;
  }
}
