const route = require('express').Router();

const ControllerCinemaHallImp = require('../Controllers/ControllerCinemaHall.js')
const CinemaHall = require("../models/cinemahall.js");

route.get('/', async (req, res) => {
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let cinemahall = await controller.retrieve();
    res.json(cinemahall);

});

route.get('/:id', async (req, res) => {
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let resp = await controller.retrieveByPk(req.params);
    res.statusCode = resp.status
    res.json(resp)

});

route.get('/:id/cinemat',async (req, res)=>
{
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let resp = await controller.retrieveCinemaHallTypes(req.params);
    //res.statusCode = resp.status
    res.json(resp)
    
});

route.post('/', async (req, res) => {
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let status = await controller.create(req.body);
    res.sendStatus(status);

});

route.put('/:id', async (req, res) => {
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let resp = await controller.update(req.params, req.body);
    res.statusCode = resp.status;
    res.json(resp)

});

route.delete('/:id', async (req, res) => {
    const controller = new ControllerCinemaHallImp(CinemaHall);
    let resp = await controller.delete(req.params)
    res.statusCode = resp.status;
    res.json(resp);
});

module.exports = route;