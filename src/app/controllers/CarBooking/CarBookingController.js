import jwt from 'jsonwebtoken';
import CarBooking from '../../models/carbooking';

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
    const booking = await CarBooking.findAll({
      where: { user_id: decode.id },
    });

    return res.json(booking);
  }

  async store(req, res) {
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' ');
    const decode = jwt.decode(token);
    const { car_id } = req.body;
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

export default new CarBookingController();
