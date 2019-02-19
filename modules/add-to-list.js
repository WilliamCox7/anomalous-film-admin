const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (body, list) => new Promise((resolve, reject) => {
  if (body._id) delete body._id;

  let search = {
    tmdbId: Number(body.tmdbId),
    season: body.season,
    episode: body.episode
  };

  mongoClient.connect(mongoURI, (err, db) => {
    db.collection(list).update(search, body, { upsert: true }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
});
