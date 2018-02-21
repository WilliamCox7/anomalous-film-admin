let mod = require('../server_modules');

module.exports = {
  findUser: (userInfo) => {
    return mod.findUser(userInfo).then((response) => {
      return response;
    }).catch((response) => {
      return null;
    });
  }
}
