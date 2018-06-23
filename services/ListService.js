let mod = require('../server_modules');

module.exports = {

  getList: (req, res) => {
    mod.getList()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  addToList: (req, res) => {
    mod.addToList(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  }

}
