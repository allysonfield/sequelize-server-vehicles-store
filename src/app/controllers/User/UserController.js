import User from "../../models/user";

class UserController {
  async index(req, res) {
    const user = await User.findAll();

    res.json(user);
  }
}

export default new UserController();
