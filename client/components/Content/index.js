// Packages
import React, { Component } from 'react';
import moment from 'moment';

// Components
import Graph from '../Graph';

// Content Class Materials
import { getAsset } from '../../modules';
import './style.scss';

class Content extends Component {

  render() {

    let releaseDate = this.props.film.released ? moment(this.props.film.released).format('DD MMM YYYY') : "";
    let viewDate = moment(this.props.film.viewed).format('DD MMM YYYY');

    return (
      <div className="Content">
        <div className="flex jc-sb ai-fe">
          <span>
            {this.props.film.award ? (
              <img src={getAsset('oscar')} />
            ) : (
              <img src={getAsset('oscar-empty')} />
            )}
          </span>
          <span>
            {this.props.film.like ? (
              <img src={getAsset('like')} />
            ) : (
              <img src={getAsset('like-empty')} />
            )}
          </span>
        </div>
        <div className="heading flex ai-fe jc-sb">
          <div className="flex ai-fe">
            <h1>{this.props.film.title}</h1><h2>({releaseDate})</h2>
          </div>
          {this.props.film.type === 'tv-episode' ? (
            <div>
              <h1>S{this.props.film.season}E{this.props.film.episode}</h1>
            </div>
          ) : null}
          {this.props.film.type === 'tv-season' ? (
            <div>
              <h1>S{this.props.film.season}</h1>
            </div>
          ) : null}
        </div>
        <pre>{this.props.film.tagline}</pre>
        <div className="flex jc-sb ai-c">
          <Graph film={this.props.film} />
          <h3>{Number(this.props.film.rating).toFixed(1)}</h3>
        </div>
        <div className="context flex jc-sb">
          <h4>{viewDate}</h4>
          <span className="flex"><img src={getAsset('location')} /> <h4>{this.props.film.location}</h4></span>
        </div>
      </div>
    );
  }
}

export default Content;
