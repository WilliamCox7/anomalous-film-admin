let mod = require('../server_modules');

module.exports = {

  getPost: (req, res) => {
    mod.getPost()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  savePost: (req, res) => {
    mod.savePost(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  publishPost: (req, res) => {
    mod.publishPost(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  }

}
