'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//const BillBoard = require('./billboard');



class MovieImp extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
      // define association here
      MovieImp.belongsToMany(models.Branch, { through: models.Billboard, targetKey:'id', foreignKey:'movieId'});
      
      //Relacion para crear funciones
      MovieImp.belongsToMany(models.Schedule, { through: models.Showtime, targetKey:'id', foreignKey: 'movieId'});
      MovieImp.belongsToMany(models.CinemaHall, { through: models.Showtime, targetKey: 'id', foreignKey: 'movieId'});
  }
}

MovieImp.init({
  name: DataTypes.STRING,
  pg: DataTypes.STRING,
  director: DataTypes.STRING,
  length: DataTypes.STRING,
  release_date: DataTypes.DATE,
  synopsis: DataTypes.STRING,
  broadcast_time: DataTypes.DATE,
  on_billboard: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Movie',
});

//MovieImp.associate();
/**
 * 
function name(params) {
  let movie = MovieImp.findByPk(1)
  movie.
}
*/
module.exports = MovieImp;
