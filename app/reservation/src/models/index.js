'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const Movie = require('./movie')
const Branch = require('./branch')
const Billboard = require('./billboard')

//Movie.belongsToMany(Branch,{through:'Billboards'})
//Branch.belongsToMany(Movie, {through:'Billboards'})



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

//Movie.belongsToMany(Branch, { through: Billboard, targetKey: 'id', foreignKey: 'movieId', as: 'Billboards' });
//Branch.belongsToMany(Movie, { through: Billboard, targetKey: 'id', foreignKey: 'branchId', as: 'Billboards' });
//Movie.belongsTo(Branch);
//Branch.belongsTo(Movie);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    console.log("Asociado jaja")
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
