const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = module.exports = express();
const http = require('http');

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));

require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});

setInterval(function() {
  let hour = new Date().getHours();
  if (hour >= 14 || hour <= 2) http.get("http://admin-anomalous-film.herokuapp.com");
}, 300000);