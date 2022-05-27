const IController = require('../interfaces/IController');

class ControllerBranchImp extends IController {
    constructor(Imodel) {
        super();
        this.Imodel = Imodel;
    }

    async create(params){   
        //implement method
        let status = null;
        await this.Imodel.create(params).then(()=>{
            status = 201;
        }).catch( ()=>{
            status = 200;
        });
        return status;
    };

    async delete(params){
        //implement method
        let resp = {};
        let deleted = await this.Imodel.destroy({where:
            {
                id:params.id
            }})
        resp.deleted = deleted;
        resp.status = deleted ? 200: 400;
        
        return resp
    };

    async update(params, changes){
        //implement method
        let resp = {};
        let branch = await this.Imodel.findByPk(params.id);
        if(branch != null){
            await branch.set(changes);
            let model_update = await branch.save();
            resp.status = 200;
            resp.update = model_update;
        }else{
            resp.status = 400;
        }

        return resp;
    }; 
       
    async retrieve(){
        //implement method
        return await this.Imodel.findAll(); 
    };

    async retrieveByPk(params){
        //implement method
        let resp = {}
        await this.Imodel.findByPk(params.id).then((branch)=>{
            resp = {
                "branch": branch,
                "status": 201
            }
        }).catch( (error)=>{
            resp = {
                "status": 400,
                "error_code":error
            }
        });
        return resp; 
    };

};

module.exports = ControllerBranchImp;