const route = require('express').Router();
const ControllerBranchImp = require('../Controllers/ControllerBranch.js');
const BranchImp = require("../models/branch.js");

route.get('/', (req,res)=>
{
    const controller = new ControllerBranchImp(BranchImp);
    controller.setModel(BranchImp);
    let branchs = controller.retrieve();
    res.json(branchs);
})

route.post('', ()=>
{
    
})