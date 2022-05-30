'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


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
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      //console.log("Asociado jaja")
      db[modelName].associate(db);
    }
  });



/** 
db = {
  Billboard: require('./billboard')(sequelize, Sequelize.DataTypes), 
  Branch: require('./branch'),
  Cinemat: require('./cinemat'),
  Movie: require('./movie'),
  Person: require('./person'),
  Reservation: require('./reservation'),
  Schedule: require('./schedule'),
  User: require('./user')
}
*/

//Movie.belongsToMany(Branch, { through: Billboard, targetKey: 'id', foreignKey: 'movieId', as: 'Billboards' });
//Branch.belongsToMany(Movie, { through: Billboard, targetKey: 'id', foreignKey: 'branchId', as: 'Billboards' });
//Movie.belongsTo(Branch);
//Branch.belongsTo(Movie);



db.sequelize = sequelize;
db.Sequelize = Sequelize;

