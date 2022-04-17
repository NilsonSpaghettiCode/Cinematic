'use strict';
const { Sequelize, Model, DataTypes } = require("sequelize");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

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
  
