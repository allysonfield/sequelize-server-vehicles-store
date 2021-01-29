const md5 = require('md5');
const Sequelize = require('sequelize');
const EmailService = require('../../services/EmailService');
const ExceptionTreatmentService = require('../../services/ExceptionTreatmentService');
const database = require('../../../config/database');
const User = require('../../models/user');
const TokenGenerate = require('../../services/TokenGenerate');

const sequelize = new Sequelize(database);
const datenow = new Date();
class RegisterController {
  async store(req, res) {
    const spread = req.body;
    console.log(spread);
    const code = await sequelize.query(`
    select uuid_generate_v4() as uuid
    `);
    const user = await User.create({
      ...spread,
      password: md5(spread.password),
      verification_code: code[0][0].uuid,
      createdAt: datenow,
      updatedAt: datenow,
    }).catch(async (error) => {
      await ExceptionTreatmentService.execute({ error, res });
    });

    const { token } = await TokenGenerate.execute({
      email: spread.email,
      id: user.id,
      userType: 'client',
    });

    const content = `
    <html>
      <body>
        <p>Olá, ${spread.name}.</p>
        <p>Click on link for verify your email and liberate access in platform http://localhost:4200/#/verification/${spread.email}/${code[0][0].uuid}/${token}.</p>
       
      </body>
    </html>
    `;

    await EmailService.execute({
      to: spread.email,
      subject: 'Auto Store - Verification link',
      content,
    });

    return res.json({ message: 'User registered' });
  }
}

module.exports = new RegisterController();
