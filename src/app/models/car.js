const { Sequelize, Model, DataTypes } = require('sequelize');

class Cars extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        color: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.STRING,
        },
        branch_id: {
          type: DataTypes.INTEGER,
        },
        year: {
          type: DataTypes.STRING,
        },
        name: {
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
    this.hasMany(models.CarBooking, { foreignKey: 'car_id' });
    this.hasMany(models.Images, { foreignKey: 'car_id' });
    this.belongsTo(models.Branches, { foreignKey: 'id' });
  }
}

module.exports = Cars;
