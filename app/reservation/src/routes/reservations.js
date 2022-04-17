// Express router
const router = require('express').Router();

const Person = require('../models/person.js');
const Reservation = require('../models/reservation.js');
const User = require('../models/user.js');

// Routes
router.get('/', (req, res) => {
	res.json({msg: 'Hello world'});
});


/**
 * Create routes
 */

// Reservation creation route
router.post('/reservation/new', async (req, res)=>{
    Reservation.create({
        idCliente: req.body.idCliente,
        state: req.body.state,
        totalValue: req.body.totalValue
    }).then(reservation=>{
        res.send("A reservation was created");
    });
    
    console.log(req.body);
    res.send("Petición post recibida");
    
    // const {idCliente, state, totalValue} = req.body;
    // if(!idCliente || !state || !totalValue){
    //     return res.status(400).json({
    //         error: "One or more fields are empty"
    //     });
    // }
    // const reservation = await Reservation.create({idCliente, state, totalValue});
    // res.json(reservation);
});

// Person creation route
router.post('/person/new', async (req, res)=>{
    
    
    
    
    Person.create({

    });
});

// User creation route
router.post('/user/new', async (req, res)=>{
    
    
});

module.exports = router;