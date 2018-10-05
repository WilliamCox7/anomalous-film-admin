module.exports = (app) => {

  app.post('/api/list', (req, res) => {
    require('./modules/add-to-list')(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
