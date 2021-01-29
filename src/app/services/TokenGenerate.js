const jwt = require('jsonwebtoken');

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

const secret = process.env.SECRET;

class TokenGenerate {
  async execute({ id, email, userType }) {
    const token = jwt.sign({ id, email, userType }, secret, {
      expiresIn: '8h',
    });
    return { token };
  }
}

module.exports = new TokenGenerate();
