const { Sequelize } = require('sequelize');

// Scheme, user, password
const db = new Sequelize('cinematic_db', 'postgres', '1234', {
	dialect: 'postgres',
	host: 'localhost',
});

module.exports = db;