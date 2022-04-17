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
router.post('/person/new', (req, res)=>{
    
    


    console.log(req.body);
    res.send("Petición post recibida");
});

router.post('/reservation/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});


router.post('/user/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});



module.exports = router;