const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (params) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);

    let search = {
      tmdbId: Number(params.tmdbId),
      season: Number(params.season),
      type: 'tv-episode'
    };

    db.collection('review').find(search, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {

        let data = {
          rating: 0,
          imdb: 0
        };

        if (result.length) {
          data.rating = result.reduce((a, e) => Number(e.rating) + a, data.rating) / result.length;
          data.imdb = result.reduce((a, e) => Number(e.imdb) + a, data.imdb) / result.length;
          data.posterPos = result[0].posterPos;
        }

        if (err) reject(err);
        resolve(data);
      });
    })
  });
});