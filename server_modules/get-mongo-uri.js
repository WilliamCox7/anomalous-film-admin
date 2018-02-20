const nconf = require('nconf');

nconf.argv().env().file('keys.json');

const user = encodeURIComponent(nconf.get('mongoUser'));
const pass = encodeURIComponent(nconf.get('mongoPass'));
const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');
const database = nconf.get('mongoDatabase');

let uri = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

module.exports = function() {
  return uri;
}
