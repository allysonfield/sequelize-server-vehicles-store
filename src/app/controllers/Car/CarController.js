const Car = require('../../models/car');
const ExceptionTreatmentService = require('../../services/ExceptionTreatmentService');

const Images = require('../../models/images');

const datenow = new Date();
class CarController {
  async index(req, res) {
    const car = await Car.findAll();
    return res.json(car);
  }

  async show(req, res) {
    const { car_id } = req.params;
    const car = await Car.findOne({
      where: { id: car_id },
      include: [
        {
          model: Images,
          attributes: [
            ['url', 'image'],
            ['url', 'thumbImage'],
          ],
        },
      ],
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });
    if (!car) {
      return res.status(401).json('Not found');
    }
    return res.json(car);
  }

  async list(req, res) {
    const { branch_id, limit, page } = req.params;
    const offset = 0 + page * limit;
    const cars = await Car.findAndCountAll({
      where: { branch_id },
      include: [
        {
          model: Images,
          attributes: [
            ['url', 'image'],
            ['url', 'thumbImage'],
          ],
        },
      ],
      limit,
      offset,
    });
    return res.json(cars);
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

module.exports = new CarController();
