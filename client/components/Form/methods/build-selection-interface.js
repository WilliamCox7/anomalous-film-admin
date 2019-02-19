// Packages
import React from 'react';

// Components
import Select from '../../Select';
import Search from '../../Search';
import Dates from '../../Dates';
import Rate from '../../Rate';
import Bool from '../../Bool';

const OPTIONS = {
  action: [ "review", "watch" ],
  type: [ "movie", "tv-episode", "tv-season", "tv-series" ],
  best: buildBest()
};

export default function() {
  let selectionInterface, step = this.state.step;

  if (step === "action" || step === "type" || step === "best") {
    let options = OPTIONS[step];
    selectionInterface = (
      <Select key={step} options={options} update={this.update} name={step} next={this.next} />
    );
  }

  else if (step === "title" || step === "season" || step === "episode" || step === "location") {
    let options = this.state.recent[this.state.film.type];
    selectionInterface = (
      <Search key={step} options={options} update={this.update} name={step} results={this.state.results} 
        tmdbId={this.state.film.tmdbId} type={this.state.film.type} recent={this.state.recent} 
        next={this.next} updateResults={this.updateResults} poster={this.state.film.poster} />
    );
  }

  else if (step === "viewed") {
    selectionInterface = (
      <Dates key={step} update={this.update} name={step} next={this.next} />
    );
  }

  else if (step === "rating") {
    selectionInterface = (
      <Rate key={step} update={this.update} name={step} next={this.next} />
    );
  }

  else if (step === "award" || step === "like") {
    selectionInterface = (
      <Bool key={step} update={this.update} name={step} next={this.next} />
    );
  }

  return selectionInterface;
}

function buildBest() {
  let best = [], min = 1929, max = (new Date()).getFullYear();
  for (var i = max; i >= min; i--) {
    best.push(i);
  }
  return best;
}