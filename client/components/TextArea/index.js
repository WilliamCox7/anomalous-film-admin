import { React, Component, autosize } from '../../packages';
import './style.scss';

class TextArea extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    var textarea = document.getElementById(this.props.id);
    autosize(textarea);
  }

  render() {
    return (
      <div className="TextArea">
        <textarea style={this.props.italic ? {"fontStyle": "italic"} : null}
          id={this.props.id} onChange={(e) => this.props.updateContent(e, this.props.sectionIndex, this.props.index)}
          placeholder="start a new paragraph here" value={this.props.paragraph}>
        </textarea>
      </div>
    );
  }
}

export default TextArea;
