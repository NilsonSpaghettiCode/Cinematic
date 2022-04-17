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

// Update a reservation
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	let rsvResponse, stsResponse;
	const { idClient, state, totalValue, createdAt, updatedAt } = req.body;

	const reservation = await Reservation.update({
		idClient: idClient,
		state: state,
		totalValue: totalValue,
		createdAt: createdAt,
		updatedAt: updatedAt,
	},{
		where: {
			id: id
		}
	});

	if(reservation[0] === 0){
		stsResponse = 400;
		rsvResponse = {
			error: `Not found reservation with id: ${id}`
		}
	}else{
		stsResponse = 200;
		rsvResponse = await Reservation.findByPk(id);
	}

	return res.status(stsResponse).json(rsvResponse);
});

module.exports = router;