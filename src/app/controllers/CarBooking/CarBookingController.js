const jwt = require('jsonwebtoken');
const CarBooking = require('../../models/carbooking');
const Car = require('../../models/car');
const Images = require('../../models/images');

const datenow = new Date();
class CarBookingController {
  async index(req, res) {
    const booking = await CarBooking.findAll();
    return res.json(booking);
  }

  async show(req, res) {
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' ');
    const decode = jwt.decode(token);
    console.log(decode);
    const car = await CarBooking.findAndCountAll({
      where: { user_id: decode.id },
      include: [
        {
          model: Car,
          include: [
            {
              model: Images,
              attributes: [
                ['url', 'image'],
                ['url', 'thumbImage'],
              ],
            },
          ],
        },
      ],
    });

    return res.json(car);
  }

  async store(req, res) {
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' ');
    const decode = jwt.decode(token);
    const { car_id } = req.body;
    const exist = await CarBooking.findAll({
      where: { user_id: decode.id, car_id },
    });

    if (exist.length > 0) {
      return res.json({ message: 'Already exist' });
    }
    const booking = await CarBooking.create({
      car_id,
      user_id: decode.id,
      createdAt: datenow,
      updatedAt: datenow,
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });

    return res.json({ booking, message: 'Booking done' });
  }
}

module.exports = new CarBookingController();
