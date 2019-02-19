export default function(props) {
  return {

    // post data to send to the server for a new film
    film: {
  
      // poster information
      poster: "",
      posterPos: "0px 0px",
  
      // reaction information
      like: false,
      award: false,
  
      // film information
      title: "",
      released: null,
      tagline: "",
      season: "",
      episode: "",
  
      // rating information
      rating: "",
      imdb: "",
  
      // context information
      viewed: new Date(),
      location: "",
  
      // categorical information
      best: "",
  
      // meta information
      tmdbId: null,
      type: 'movie'
  
    },
  
    // determines what api to post to (list or review)
    action: 'review',
  
    // modal booleans
    showForm: true
  
  }
}