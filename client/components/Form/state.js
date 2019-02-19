export default function(props) {
  return {

    film: props.film,

    step: "action",
    prompt: "please select the type of submission you will be making",
  
    // localstorage keeps recent input selections
    recent: {
      'movies': [],
      'tv-series': [],
      'locations': []
    },

    // tmdb api response results
    results: {
      films: [],
      seasons: [],
      episodes: []
    }
  
  }
}