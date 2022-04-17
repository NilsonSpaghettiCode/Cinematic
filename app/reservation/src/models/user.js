'use strict';
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresql::memory");



module.exports = (sequelize, DataTypes) => {
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

};
