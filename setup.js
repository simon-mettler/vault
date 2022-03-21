// require('dotenv').config();
const pool = require('./db');

pool.query(`CREATE TABLE roles(
		role_id serial PRIMARY KEY,
		role_name VARCHAR (255) UNIQUE NOT NULL
	);`);
