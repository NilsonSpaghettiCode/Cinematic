// Express router

const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
	res.json({msg: 'Hello world'})
});


// Create Routes
router.post('/reservation/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});

router.post('/person/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});

router.post('/user/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});



module.exports = router;