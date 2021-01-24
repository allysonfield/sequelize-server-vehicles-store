import { Model, DataTypes } from "sequelize";

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
          type: DataTypes.DECIMAL,
        },
        branch: {
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
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.CarBooking, { foreignKey: "id" });
  }
}

export default Cars;
