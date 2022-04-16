// Express router
const {Reservation} = require('../models/reservation');

const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
	const reservations = Reservation.findAll();
	res.json(reservations);
});

module.exports = router;