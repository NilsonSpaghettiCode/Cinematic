'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Cinemat = require('./cinemat');
const CinemaHall = require('./cinemahall')


class CinemaHallType extends Model {
  /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
  static associate(models) {
    // define association here
  }
}

CinemaHallType.init({
  cinematId: {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model:Cinemat,
      key:'id'
    }     
  },
  
  cinemahallId: {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model:CinemaHall,
      key:'id'
    }     
  }

  
}, {
  sequelize,
  modelName: 'CinemaHallType',
});

module.exports = CinemaHallType;
