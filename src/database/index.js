const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');
const User = require('../app/models/user');
const Car = require('../app/models/car');
const CarBooking = require('../app/models/carbooking');
const Branches = require('../app/models/branch');
const Images = require('../app/models/images');

const models = [User, Car, CarBooking, Branches, Images];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
