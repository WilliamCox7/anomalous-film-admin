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
  }
}
