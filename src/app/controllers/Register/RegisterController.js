import md5 from "md5";
import Sequelize from "sequelize";
import EmailService from "../../services/EmailService";
import ExceptionTreatmentService from "../../services/ExceptionTreatmentService";
import database from "../../../config/database";

const sequelize = new Sequelize(database);
const datenow = new Date();
class RegisterController {
  async store(req, res) {
    const spread = req.body;
    const user = await User.create({
      ...spread,
      password: md5(spread.password),
      createdAt: datenow,
      updatedAt: datenow,
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });
    const code = await sequelize.query(`
    select uuid_generate_v4() as uuid
    `);

    const content = `
    <html>
      <body>
        <p>Olá, ${spread.name}.</p>
        <p>Essa é sua senha temporária ${code[0][0].uuid}.</p>
        <p>Ao logar o sistema irá pedir para criar uma senha nova</p>
      </body>
    </html>
    `;

    await EmailService.execute({
      to: spread.email,
      subject: "Vehicles Store - Senha Temporária",
      content,
    });

    return res.json(user);
  }
}

export default new RegisterController();
