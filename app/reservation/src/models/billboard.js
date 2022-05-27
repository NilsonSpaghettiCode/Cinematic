'use strict';
const { Sequelize, Model, DataTypes } = require("sequelize");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const BranchImp = require('./branch')
const MovieImp = require('./movie')

class Billboard extends Model {
  /**
  * Helper method for defining associations.
  * This method is not a part of Sequelize lifecycle.
  * The `models/index` file will call this method automatically.
  */
  static associate(models) 
  {
    Billboard.belongsTo(models.BranchImp);
    Billboard.belongsTo(models.MovieImp);
  }
}

Billboard.init({
  
  movieId: DataTypes.INTEGER,
  branchId: DataTypes.INTEGER

}, {
  sequelize,
  modelName: 'Billboard',
});

module.exports = Billboard;