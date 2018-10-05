import React, { Component } from 'react';
import { getAsset } from '../../modules';
import './style.scss';

class ItemInformation extends Component {
  render() {
    return (
      <div className="ItemInformation">
        <div className="title flex ai-fe">
          <h1>{this.props.item.title}</h1>
          {this.props.item.released ? (
            <p>({this.props.item.released})</p>
          ) : null}
        </div>
        <p className="plot">{this.props.item.plot}</p>
        <div className="space"></div>
        <div className="ratings flex">
          {this.props.item.imdb ? (
            <div className="flex ai-c">
              <img src={getAsset('imdb', 'png')} />
              <h3>{this.props.item.imdb}</h3>
            </div>
          ) : null}
          <div className="flex ai-c">
            <img src={getAsset('logo')} />
            <input type="text" name="rating" placeholder="your rating..." value={this.props.item.rating} onChange={this.props.update} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInformation;
