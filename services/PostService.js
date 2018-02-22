let mod = require('../server_modules');

module.exports = {

  getPost: (req, res) => {
    mod.getPost().then((post) => {
      if (post.length > 0) {
        res.status(200).send(post);
      } else {
        res.status(500).send(post);
      }
    });
  },

  savePost: (req, res) => {
    mod.savePost(req.body).then((result) => {
      if (result.result.nModified > 0) {
        res.status(200).send(result);
      } else {
        res.status(500).send(result);
      }
    }).catch((error) => {
      res.status(500).send(error);
    });
  },

  publishPost: (req, res) => {
    mod.publishPost(req.body).then((result) => {
      if (result.result.nModified > 0) {
        res.status(200).send(result);
      } else {
        res.status(500).send(result);
      }
    }).catch((error) => {
      res.status(500).send(error);
    });
  }

}
