module.exports = (app) => {

  app.post('/api/review', (req, res) => {
    require('./modules/add-to-list')(req.body, 'review')
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.post('/api/watch', (req, res) => {
    require('./modules/add-to-list')(req.body, 'watch')
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/film/:id/:season/:episode/:type', (req, res) => {
    require('./modules/get-film')(req.params)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/season-rating/:tmdbId/:season', (req, res) => {
    require('./modules/get-season-rating')(req.params)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
