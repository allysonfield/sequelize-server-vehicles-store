import Mail from 'nodemailer';
import Insecure from 'insecure';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

const google = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // use SSL
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};
const transporter = Mail.createTransport(google);
Insecure();
class EmailService {
  async execute({ to, subject, content }) {
    const mailOptions = {
      from: 'noreply@vehiclesstore.com.br',
      // from: 'mensageiroanuenciadigital@up5.com.br',
      to,
      subject,
      html: content,
    };
    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        console.log(error);
        return false;
      }
      console.log('......................email sent.................');
      return '......................email sent.................';
    });
  }
}
export default new EmailService();
