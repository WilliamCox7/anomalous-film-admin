module.exports = (app) => {

  app.post('/api/list', (req, res) => {
    require('./modules/add-to-list')(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/film/:id', (req, res) => {
    require('./modules/get-film')(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
