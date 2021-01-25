import { Model, DataTypes, Sequelize } from 'sequelize';

class CarBooking extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        car_id: {
          type: DataTypes.INTEGER,
        },
        user_id: {
          type: DataTypes.INTEGER,
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
    this.belongsTo(models.User, { foreignKey: 'id' });
    this.belongsTo(models.Cars, { foreignKey: 'id' });
  }
}

export default CarBooking;
