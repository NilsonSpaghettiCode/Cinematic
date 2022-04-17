// Express router
const router = require('express').Router();

const Person = require('../models/person.js');
const Reservation = require('../models/reservation.js');
const User = require('../models/user.js');

// Routes
router.get('/', (req, res) => {
	res.json({msg: 'Hello world'})
});


// Create Routes

router.post('/reservation/new', (req, res)=>{
    
    // Reservation creation
    Reservation.create({
        idCliente: req.body.idCliente,
        state: req.body.state,
        totalValue: req.body.totalValue
    }).then(reservation=>{
        res.send("A reservation was created");
    });


    console.log(req.body);
    res.send("Petición post recibida");
});


module.exports = router;