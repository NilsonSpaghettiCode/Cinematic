const route = require('express').Router();

//Controller
const ControllerScheduleImp = require('../Controllers/ControllerSchedule.js');

//Model
const ScheduleImp = require('../models/schedule.js');

route.get('/', async (req,res)=>
{
    const controller = new ControllerScheduleImp(ScheduleImp);
    let schedule = await controller.retrieve();
    res.json(schedule);
})

route.get('/:id',async (req, res)=>
{
    const controller = new ControllerScheduleImp(ScheduleImp)
    let resp = await controller.retrieveByPk(req.params);
    res.statusCode = resp.status
    res.json(resp)
    
});

route.post('/', async (req, res)=>
{
    const controller = new ControllerScheduleImp(ScheduleImp)
    let status = await controller.create(req.body);
    res.sendStatus(status);
});

route.put('/:id', async (req, res)=>{
    const controller = new ControllerScheduleImp(ScheduleImp)
    let resp = await controller.update(req.params, req.body);
    res.statusCode = resp.status;
    res.json(resp)
});


route.delete('/:id', async (req, res)=>{
    const controller = new ControllerScheduleImp(ScheduleImp)
    let resp = await controller.delete(req.params)
    res.statusCode = resp.status;
    res.json(resp);

});

module.exports = route