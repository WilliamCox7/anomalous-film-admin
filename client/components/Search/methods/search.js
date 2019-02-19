import axios from 'axios';

export default function(title) {
  let queryStr = title.replace(" ", "+");
  let type = this.props.type.indexOf('tv') > -1 ? 'tv' : 'movie';

  let apiUrl = `https://api.themoviedb.org/3/search/${type}?api_key=98b81f5311c6ff008b592a0366f13a13&query=${queryStr}`;
  
  axios.get(apiUrl)
  .then((result) => {
    let results = this.props.results;
    results.films = result.data.results;
    this.props.updateResults(results);
  })
  .catch((err) => console.error(err));
}