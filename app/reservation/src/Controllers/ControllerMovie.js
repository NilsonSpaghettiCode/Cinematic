const IController = require('../interfaces/IController');

const BranchImp = require('../models/branch')

class ControllerMovieImp extends IController {
    constructor(Imodel) {
        super();
        this.Imodel = Imodel;
    };

    async create(params) {
        //implement method
        let status = null;
        console.log(params)
        await this.Imodel.create(params).then(async (movie) => {
            //console.log(movie)
            status = 201;
            // let branch = await BranchImp.findByPk(1);
            // let add_movie = await movie.addBranch(branch);
            // console.log("Result",add_movie);
        })
            .catch(() => {
                status = 200;
            });
        //modelInstance.addBranchs(params.branches);
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
        return movie
    }

};

module.exports = ControllerMovieImp;