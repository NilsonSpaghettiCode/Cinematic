'use strict';

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory");
class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasOne(models.User);
    }
  }

  Person.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING

    
  }, 
  {
    sequelize,
    modelName: 'Person',
  });  


module.exports = Person;