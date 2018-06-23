import { React, Component } from '../../packages';
import { logoGray } from '../../assets';
import './style.scss';

class Thumbnail extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="Thumbnail" style={this.props.post.thumbnail ? null : {background: "#282828"}}>
        <div className="thumb-link flex jc-c ai-c fd-c">
          {this.props.post.thumbnail ? (
            <img src={this.props.post.thumbnail} />
          ) : (
            <img src={logoGray} style={{width: "80%", height: "auto"}} />
          )}
          {this.props.post.thumbnail ? (
            <div className="circle" style={{
              backgroundImage: `url(${this.props.post.thumbnail})`}}>
            </div>
          ) : null}
          <div className="circle-text flex fd-c ai-c">
            {this.props.post.work ? (
              <h1>{this.props.post.work}</h1>
            ) : null}
            {this.props.post.rating ? (
              <h1>{this.props.post.rating}%</h1>
            ) : null}
            {this.props.post.title ? (
              <h1>{this.props.post.title}</h1>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
