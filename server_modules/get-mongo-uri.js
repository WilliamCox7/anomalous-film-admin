let production = process.env.NODE_ENV; // determines if env is in production or development

let uri;

if (production) {
  let env = process.env;
  uri = `mongodb://${env.USER}:${env.PASS}@${env.HOST}:${env.MONGO_PORT}/${env.BASE}`;
} else {
  let env = require('../config').env;
  uri = `mongodb://${env.HOST}:${env.MONGO_PORT}/${env.BASE}`;
}

module.exports = function() {
  return uri;
}
