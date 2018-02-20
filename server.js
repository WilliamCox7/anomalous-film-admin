const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const app = module.exports = express();

app.set('port', (process.env.PORT || config.port));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));

const PostService = require('./services/PostService');

app.get('/post', PostService.getPost);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'))
})

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
