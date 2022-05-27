const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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
    opening:DataTypes.FLOAT,
    closing:DataTypes.FLOAT,   
}
);

module.exports = BranchImp;

