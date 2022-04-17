'use strict';
const { Sequelize, Model, DataTypes } = require("sequelize");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Person);
      User.hasMany(models.Reservation);
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    rol: DataTypes.BOOLEAN,
    idPerson: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });

module.exports = User;


