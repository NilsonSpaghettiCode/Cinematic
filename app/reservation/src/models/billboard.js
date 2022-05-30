'use strict';

const { Model } = require("sequelize");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Branch = require('./branch')
const Movie = require('./movie')

class Billboard extends Model {
  /**
  * Helper method for defining associations.
  * This method is not a part of Sequelize lifecycle.
  * The `models/index` file will call this method automatically.
  */
  static associate(models) {
    //Billboard.belongsTo(models.Branch);
    //Billboard.belongsTo(models.Movie);
  }
}

Billboard.init({
  movieId:
  {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model:Movie,
      key:'id'
    }
  },
  branchId:
  {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model:Branch,
      key:'id'
    }

  }

}, {
  sequelize,
  modelName: 'Billboard',

});

module.exports = Billboard;