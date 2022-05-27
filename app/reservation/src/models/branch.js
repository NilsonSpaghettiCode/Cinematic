'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const Movie = require('./movie.js')

class BranchImp extends Model
{
    static associate(models){        
        BranchImp.belongsToMany(models.MovieImp, { through: models.Billboard });
    }
}

//Set atributes ORM 
BranchImp.init({
    
    branchName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    opening:DataTypes.TIME,
    closing:DataTypes.TIME,   
},
{
    sequelize,
    timestamps:false,
    modelName: 'Branch'
}
);

module.exports = BranchImp;

