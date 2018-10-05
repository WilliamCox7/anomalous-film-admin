const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (body) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    db.collection('list').insert(body, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  });
});
