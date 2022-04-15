const db = require('../db/database');
const { DataTypes } = require('sequelize');

const Reservation = db.define('Reservations', {
	state: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
	price: {
		type: DataTypes.FLOAT,
	},
});

module.exports = Persona;