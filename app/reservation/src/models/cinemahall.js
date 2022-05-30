'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Branch = require('./branch');

class CinemaHall extends Model {
  /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
  static associate(models) {
    // define association here
    CinemaHall.belongsTo(models.Branch, {foreignKey:'branchId'});

    CinemaHall.belongsToMany(models.Movie, { through: models.Showtime, targetKey:'id', foreignKey: 'cinemahallId'});
    CinemaHall.belongsToMany(models.Schedule, { through: models.Showtime, targetKey: 'id', foreignKey: 'cinemahallId'});
    
    CinemaHall.belongsToMany(models.Cinemat, {through:models.CinemaHallType, targetKey:'id', foreignKey: 'cinematId'}) //CambiarID
  }
}
CinemaHall.init({
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
  branchId: {
    type: Sequelize.DataTypes.INTEGER,
    references:
    {
      model: Branch,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'CinemaHall',
});

module.exports = CinemaHall;