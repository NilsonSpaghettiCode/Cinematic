const route = require('express').Router();

const ControllerBranchImp = require('../Controllers/ControllerBranch.js');
const BranchImp = require("../models/branch.js");

route.get('/', async (_req,res)=>
{
    const controller = new ControllerBranchImp(BranchImp);
    let branchs = await controller.retrieve();
    res.json(branchs);
})

route.get('/:id',async (req, res)=>
{
    const controller = new ControllerBranchImp(BranchImp)
    let resp = await controller.retrieveByPk(req.params);
    res.statusCode = resp.status
    res.json(resp)
    
});

//Obtiene la cartelera de una sede
route.get('/:id/movies',async (req, res)=>
{
    const controller = new ControllerBranchImp(BranchImp)
    let resp = await controller.retrieveMoviesOfBranch(req.params);
    //res.statusCode = resp.status
    res.json(resp)
    
});

//Obtiene las salas de un cinema
route.get('/:id/cinemahalls',async (req, res)=>
{
    const controller = new ControllerBranchImp(BranchImp)
    let resp = await controller.retrieveCinemaHallsOfBranch(req.params);
    //res.statusCode = resp.status
    res.json(resp)
    
});

route.post('/', async (req, res)=>
{
    const controller = new ControllerBranchImp(BranchImp)
    let status = await controller.create(req.body);
    res.sendStatus(status);
});

route.put('/:id', async (req, res)=>{
    const controller = new ControllerBranchImp(BranchImp)
    let resp = await controller.update(req.params,req.body);
    res.statusCode = resp.status;
    res.json(resp)
});

route.delete('/:id', async (req, res)=>{
    const controller = new ControllerBranchImp(BranchImp)
    let resp = await controller.delete(req.params)
    res.statusCode = resp.status;
    res.json(resp);

});

module.exports = route;