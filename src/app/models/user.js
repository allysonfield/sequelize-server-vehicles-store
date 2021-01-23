import { Model, DataTypes } from "sequelize";

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
        },
        verification_code: {
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

  // static associate(models) {
  //   this.belongsTo(models.cartorio, { foreignKey: 'cart_id' });
  // }
}

export default User;
