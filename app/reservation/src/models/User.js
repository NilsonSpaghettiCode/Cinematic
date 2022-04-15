const db = require('../db/database');
const Person = require('./Person')
const { DataTypes } = require('sequelize');

const User = db.define('Users', {
	email: {
		type: DataTypes.STRING,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
	},
	rol:{
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	state:{
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
});

/* Relations
 *
 * A.hasOne(B)
 * Foreing key defined into B
*/
Person.hasOne(User);

module.exports = User;