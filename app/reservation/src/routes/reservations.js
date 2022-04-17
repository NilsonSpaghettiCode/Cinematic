// Express router
const router = require('express').Router();

const { Reservation } = require('../models');

// Routes

// Select all reservations
router.get('/', async (req, res) => {
	const reservationList = await Reservation.findAll();

	return res.json(reservationList);
});

// Select a single reservation
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const reservation = await Reservation.findByPk(id);
	let rsvResponse, stsResponse;

	if(!reservation){
		stsResponse = 400;
		rsvResponse = {
			error: `Not found reservation with id: ${id}`
		};
	}else{
		stsResponse = 200;
		rsvResponse = reservation;
	}

	return res.status(stsResponse).json(rsvResponse);
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	let rsvResponse, stsResponse;
	const reservation = await Reservation.destroy({
		where:{
			id: id
		}
	});

	if(reservation === 0){
		stsResponse = 400;
		rsvResponse = {
			error: `Not found reservation with id: ${id}`
		} 
	}else{
		stsResponse = 200;
		rsvResponse = {
			msg: "Reservation delete complete!"
		}
	}

	return res.status(200).json(rsvResponse);
});

module.exports = router;