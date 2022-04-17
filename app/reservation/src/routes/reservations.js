// Express router
const router = require('express').Router();
const Reservation = require('../models/reservation');
// Routes
router.get('/', async (req, res) => {
	const reservations = await Reservation.findAll({attributes:['id','state','totalValue','createdAt']});
	res.json(reservations);
});

module.exports = router;