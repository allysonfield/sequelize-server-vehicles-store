const { Sequelize, Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        birthdate: {
          type: DataTypes.INTEGER,
        },
        password: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: 'N',
        },
        verification_code: {
          type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('NOW()'),
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.CarBooking, { foreignKey: 'user_id' });
  }
}

module.exports = User;
