export default function(step) {
  let prompts = {
    action: `please select the type of submission you will be making`,
    type: `please select the type of film you wish to review`,
    title: `search for the ${displayText(this.state.film.type)} you would like to ${this.props.action}`,
    season: `please select the season for ${this.state.film.title}`,
    episode: `please select the episode for season ${this.state.film.season}`,
    viewed: `please select the date you viewed this ${displayText(this.state.film.type)}`,
    location: `please select the location where you viewed this ${displayText(this.state.film.type)}`,
    rating: `how would you rate this ${displayText(this.state.film.type)}?`,
    award: `would you like to award this ${displayText(this.state.film.type)}?`,
    like: `is this ${displayText(this.state.film.type)} a favorite of yours?`,
    best: `what year was this a best picture winner (if any)?`
  }
  return prompts[step];
}

function displayText(type) {
  switch(type) {
    case 'movie': return 'movie';
    case 'tv-episode': return 'tv episode';
    case 'tv-season': return 'tv season';
    case 'tv-series': return 'tv series';
  }
}