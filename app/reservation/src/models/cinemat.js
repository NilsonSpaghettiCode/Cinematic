'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

class CinematImp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CinematImp.belongsToMany(models.CinemaHall, {through:models.CinemaHallType, targetKey:'id', foreignKey: 'cinematId'}); //CambiarID

    }
  }
  
CinematImp.init({
  cinema_type: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Cinemat',
});

  module.exports = CinematImp;
