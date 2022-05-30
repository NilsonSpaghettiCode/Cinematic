const IController = require('../interfaces/IController');

const BranchImp = require('../models/branch');
const { param } = require('../routes/schedule');

class ControllerMovieImp extends IController {
    constructor(Imodel) {
        super();
        this.Imodel = Imodel;
    };

    async create(body) {
        //implement method
        let resp = {}

        console.log(body)
        await this.Imodel.create(body.movie).then(async (movie) => {
            movie.setBranches(body.branches)
            resp = {
                movie,
                branches: await movie.getBranches(),
                status: 200
            }
        })
            .catch(() => {
                resp = {
                    "status": 401
                };
            });
        //modelInstance.addBranchs(params.branches);
        return resp;
    };

    async delete(params) {
        //implement method
        let resp = {};
        let deleted = await this.Imodel.destroy({
            where:
            {
                id: params.id
            }
        });
        resp.deleted = deleted;
        resp.status = deleted ? 200 : 400;

        return resp;
    };

    async update(params, changes) {
        //implement method
        let resp = {};
        let movie = await this.Imodel.findByPk(params.id);
        if (movie != null) {
            await movie.set(changes);
            let model_update = await movie.save();
            resp.status = 200;
            resp.update = model_update;
        } else {
            resp.status = 400;
        }

        return resp;
    };

    async retrieve() {
        //implement method
        //return await this.Imodel.findAll();
        return await BranchImp.findAll();
    };

    async retrieveByPk(params) {
        //implement method
        let resp = {};
        await this.Imodel.findByPk(params.id).then((movie) => {
            resp = {
                "movie": movie,
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

    async retrieveMovieBranch(params) {

        /** 
        let movie = {}
        await this.Imodel.findOne( {where:{
            id:params.id,
            
        },
        include: BranchImp
    }
            )
            .then(InstanceModel => movie = InstanceModel)
            .catch(error => console.log(error));

        
        console.log("Movie => ", movie)
        //let movieBranches = await movie.getBranch();
        //console.log('MovieBranches:', movieBranches)
        */
        let movie = await this.Imodel.findByPk(params.id);
        let movieBranches = await movie.getBranches();
        console.log(movieBranches)
        return movieBranches
    }

};

module.exports = ControllerMovieImp;