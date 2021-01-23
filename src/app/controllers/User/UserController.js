import User from "../../models/user";
import ExceptionTreatmentService from "../../services/ExceptionTreatmentService";

const datenow = new Date();
class UserController {
  async index(req, res) {
    const user = await User.findAll();

    res.json(user);
  }

  async store(req, res) {
    const spread = req.body;
    const user = await User.create({
      ...spread,
      createdAt: datenow,
      updatedAt: datenow,
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });

    return res.json(user);
  }
}

export default new UserController();
