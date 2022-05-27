'use strict';
const { Model,Sequelize, DataTypes,  } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
class BranchImp extends Model
{
    static associate(models){        
        BranchImp.hasMany('//Salas');
    }

    retrieve(req){
        console.log('La reserva ha sido creada');
    }
}

//Set atributes ORM 
BranchImp.init({
    
    idBranch:DataTypes.INTEGER,
    branchName:DataTypes.STRING,
    opening:DataTypes.DATE,
    closing:DataTypes.DATE,   
},
{
    sequelize,
    modelName: 'Branch'
}
);

module.exports = BranchImp;

