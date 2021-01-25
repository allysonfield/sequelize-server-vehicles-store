import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/user';
import Car from '../app/models/car';
import CarBooking from '../app/models/carbooking';
import Branches from '../app/models/branch';
import Images from '../app/models/images';

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

export default new Database();
