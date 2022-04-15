const db = require('../db/database');
const { DataTypes } = require('sequelize');

const Person = db.define('Persons', {
	name: {
		type: DataTypes.STRING,
	},
	last_name: {
		type: DataTypes.STRING,
	},
	address: {
		type: DataTypes.STRING,
	},
});

module.exports = Person;