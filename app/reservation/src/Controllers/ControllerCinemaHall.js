const IController = require('../interfaces/IController');

class ControllerCinemaHall extends IController {
    constructor(Imodel) {
        super();
        this.Imodel = Imodel;
    }

    async create(params) {
        //implement method
        let status = null;
        await this.Imodel.create(params).then(() => {
            status = 201;
        }).catch(() => {
            status = 200;
        });
        return status;
    };

    async delete(params) {
        //implement method
        let resp = {};
        let deleted = await this.Imodel.destroy({
            where:
            {
                id: params.id
            }
        })
        resp.deleted = deleted;
        resp.status = deleted ? 200 : 400;

        return resp
    };

    async update(params, changes) {
        //implement method
        let resp = {};
        let cinehall = await this.Imodel.findByPk(params.id);
        if (cinehall != null) {
            await cinehall.set(changes);
            let model_update = await cinehall.save();
            resp.status = 200;
            resp.update = model_update;
        } else {
            resp.status = 400;
        }

        return resp;
    };

    async retrieve() {
        return await this.Imodel.findAll();
    };

    async retrieveByPk(params) {
        //implement method
        let resp = {}
        await this.Imodel.findByPk(params.id).then((cinemahall) => {
            resp = {
                "cinemahall": cinemahall,
                "status": 201
            }
        }).catch((error) => {
            resp = {
                "status": 400,
                "error_code": error
            }
        });
        return resp;
    };

    async retrieveCinemaHallTypes(params){
        let resp = {}
        let cinemahall = {}
        let cinemahallTypes = {}
        
        try {
        cinemahall = await this.Imodel.findByPk(params.id)
        cinemahallTypes = await cinemahall.getCinemats();   
        resp = {
            cinemahall,
            types: cinemahallTypes,
            status: 200
        }

        } catch (error) {
            resp.error = error
            resp.status = 400
        }
        
        return resp; 
    };

}

module.exports = ControllerCinemaHall;