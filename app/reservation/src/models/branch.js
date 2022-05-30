'use strict';

const { Model, Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

class BranchImp extends Model
{
    static associate(models){        
        BranchImp.belongsToMany(models.Movie, { through: models.Billboard, targetKey:'id',foreignKey:'branchId' });
        BranchImp.hasMany(models.CinemaHall, {foreignKey:'branchId'});
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
//BranchImp.associate();

module.exports = BranchImp;

