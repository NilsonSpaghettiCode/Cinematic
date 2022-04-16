'use strict';
const {Model} = require('sequelize');
const Person = require('./person')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.BelongsTo(models.Person);
      models.Person.hasOne(User);
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
  return User;
};

User.BelongsTo(Person);