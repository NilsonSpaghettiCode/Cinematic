'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/tmp-sequelice.js');

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

},{
  sequelize, // We need to pass the connection instance
  modelName: 'Reservations'
});

module.exports = Reservation;



