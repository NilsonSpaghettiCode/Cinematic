'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const CinemaHall = require('./cinemahall');
const Movie = require('./movie');
const Schedule = require('./schedule');


class Showtime extends Model {
  /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
  static associate(models) {
    // define association here
  }
}
 Showtime.init({
  movieId: {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model: Movie,
      key: 'id'
    }
  },
  scheduleId: {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model: Schedule,
      key: 'id'
    }
  },
  cinemahallId: {
    type: Sequelize.DataTypes.INTEGER,
    references: 
    {
      model: CinemaHall,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Showtime',
});

module.exports = Showtime;