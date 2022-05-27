const route = require('express').Router();

const ControllerCinematImp = require('../Controllers/ControllerCinemat.js')


const CinematImp = require("../models/cinemat.js");

route.get('/', async (req, res) => {
    const controller = new ControllerCinematImp(CinematImp);
    let cinemat = await controller.retrieve();
    res.json(cinemat);

});

route.get('/:id', async (req, res) => {
    const controller = new ControllerCinematImp(CinematImp);
    let resp = await controller.retrieveByPk(req.params);
    res.statusCode = resp.status
    res.json(resp)

});

route.post('/', async (req, res) => {
    const controller = new ControllerCinematImp(CinematImp);
    let status = await controller.create(req.body);
    res.sendStatus(status);

});

route.put('/:id', async (req, res) => {
    const controller = new ControllerCinematImp(CinematImp)
    let resp = await controller.update(req.params, req.body);
    res.statusCode = resp.status;
    res.json(resp)

});

route.delete('/:id', async (req, res) => {
    const controller = new ControllerCinematImp(CinematImp)
    let resp = await controller.delete(req.params)
    res.statusCode = resp.status;
    res.json(resp);
});

module.exports = route;