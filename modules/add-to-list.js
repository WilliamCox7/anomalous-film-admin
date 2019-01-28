const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (body) => new Promise((resolve, reject) => {
  console.log(body);
  if (body._id) delete body._id;
  mongoClient.connect(mongoURI, (err, db) => {
    db.collection('list').update({
      tmdbId: Number(body.tmdbId)
    }, body, {
      upsert: true
    }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  });
});
