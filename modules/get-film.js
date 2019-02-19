const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (params) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);

    let search = {
      tmdbId: Number(params.id),
      type: params.type
    };

    if (params.season && params.season !== "undefined") search.season = params.season;
    if (params.episode && params.episode !== "undefined") search.episode = params.episode;
    
    db.collection('review').find(search, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    })
  });
});
