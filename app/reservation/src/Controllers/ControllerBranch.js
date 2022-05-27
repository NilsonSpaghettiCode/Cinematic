const IController = require('../interfaces/IController');


//consBranch = require('../models/branch')t Model = require("sequelize");

class ControllerBranchImp extends IController {
    constructor(Imodel) {
        this.Imodel = Imodel;
    }

    create(req){   
        //implement method
    };
    delete(req){
        //implement method
    };
    update(req){
        //implement method
    };    
    async retrieve(){
        //implement method
        return await this.Imodel.findAll(); 
    };
    setModel(Imodel) {
        this.Imodel = Imodel;
    };

};

module.exports = ControllerBranchImp;