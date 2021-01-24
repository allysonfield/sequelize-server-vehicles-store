import Car from "../../models/car";
import ExceptionTreatmentService from "../../services/ExceptionTreatmentService";

const datenow = new Date();
class CarController {
  async index(req, res) {
    const car = await Car.findAll();
    return res.json(car);
  }

  async store(req, res) {
    const spread = req.body;
    const car = await Car.create({
      ...spread,
      createdAt: datenow,
      updatedAt: datenow,
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });
    return res.json({ car, message: "Car created" });
  }
}

export default new CarController();
