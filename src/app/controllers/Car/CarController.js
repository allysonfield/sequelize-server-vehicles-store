import Car from '../../models/car';
import ExceptionTreatmentService from '../../services/ExceptionTreatmentService';

import Images from '../../models/images';

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

    const filter = spread.images.map(({ image }) => ({
      car_id: car.id,
      url: image,
    }));

    const image = await Images.bulkCreate(filter, { returning: true });
    return res.json({ car, image, message: 'Car created' });
  }
}

export default new CarController();
