const User = require('../../models/user');

class UserController {
  async index(req, res) {
    const user = await User.findAll();

    res.json(user);
  }
}

module.exports = new UserController();
