const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (params) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);

    let search = {
      title: params.title,
      season: params.season,
      type: 'tv-episode'
    };

    db.collection('list').find(search, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {

        let rating = 0;

        if (result.length) {
          rating = result.reduce((a, e) => Number(e.rating) + a, rating) / result.length;
        }

        rating = rating.toString();

        if (err) reject(err);
        resolve(rating);
      });
    })
  });
});