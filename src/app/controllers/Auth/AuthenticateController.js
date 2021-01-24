import md5 from "md5";
import User from "../../models/user";
import TokenGenerate from "../../services/TokenGenerate";

class AuthenticateController {
  async update(req, res) {
    const { email, verification_code } = req.params;
    const user = await User.findOne({ where: { email, verification_code } });
    if (!user) {
      return res.json("User not found!");
    }

    await user.update({
      status: "A",
    });

    return res.json("Access released");
  }

  async show(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password: md5(password) },
    });

    if (!user) {
      return res.json("Email or password incorrects");
    }

    if (user.status === "N") {
      return res.status(401).json("User not verified");
    }

    const { token } = await TokenGenerate.execute({
      email,
      id: user.id,
      userType: "client",
    });

    return res.json({ token, message: "Success" });
  }
}

export default new AuthenticateController();
