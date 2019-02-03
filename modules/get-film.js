const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (params) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);

    let search = {
      tmdbId: Number(params.id),
      season: params.season === "undefined" ? "" : params.season,
      episode: params.episode === "undefined" ? "" : params.episode,
      type: params.type
    };
    
    db.collection('list').find(search, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    })
  });
});
