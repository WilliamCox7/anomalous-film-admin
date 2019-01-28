const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (id) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);
    db.collection('list').find({
      tmdbId: Number(id)
    }, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    })
  });
});
