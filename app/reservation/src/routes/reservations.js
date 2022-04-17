// Express router

const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
	res.json({msg: 'Hello world'})
});


// Create Routes
app.post('/reservations/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});

app.post('/person/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});

app.post('/user/new', (req, res)=>{
    console.log(req.body);
    res.send("Petición post recibida");
});



module.exports = router;