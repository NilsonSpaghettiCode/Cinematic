'use strict';
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresql::memory");
class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User);
    }
  }

  Reservation.init({
    idClient: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    totalValue: DataTypes.FLOAT
  }, 

  {
    sequelize,
    modelName: 'Reservation',
  });

module.exports = Reservation;
  
