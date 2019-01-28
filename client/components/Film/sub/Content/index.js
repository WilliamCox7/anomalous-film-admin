import React, { Component } from 'react';
import { getAsset } from '../../../../modules';
import moment from 'moment';
import Graph from '../Graph';
import './style.scss';

class Content extends Component {

  render() {

    let averageRating = (Number(this.props.film.rating) + Number(this.props.film.imdb)) / 2;
    let releaseDate = this.props.film.released ? moment(this.props.film.released).format('DD MMM YYYY') : "";
    let viewDate = moment(this.props.film.viewed).format('DD MMM YYYY');

    return (
      <div className="Content">
        <div className="flex jc-sb ai-fe">
          <span onClick={() => this.props.toggle('award')}>
            {this.props.film.award ? (
              <img src={getAsset('oscar')} />
            ) : (
              <img src={getAsset('oscar-empty')} />
            )}
          </span>
          <span onClick={() => this.props.toggle('like')}>
            {this.props.film.like ? (
              <img src={getAsset('like')} />
            ) : (
              <img src={getAsset('like-empty')} />
            )}
          </span>
        </div>
        <div className="heading flex ai-fe">
          <h1>{this.props.film.title}</h1><h2>({releaseDate})</h2>
        </div>
        <pre>{this.props.film.tagline}</pre>
        <div className="flex jc-sb ai-c">
          <Graph film={this.props.film} />
          <h3>{averageRating.toFixed(1)}</h3>
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
