const db = require('../db');

const addDailyLog = (req, res) => {
	const {date, mood, happy, stress, paranoia, depression, fear, libido, inlove, sex_count, sex_qual, masturbation, cuddle} = req.body;
	db.query(
		`INSERT INTO dailylogs
			(date, mood, happy, stress, paranoia, depression, fear, libido, inlove, sex_count, sex_qual, masturbation, cuddle)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
	`, [date, mood, happy, stress, paranoia, depression, fear, libido, inlove, sex_count, sex_qual, masturbation, cuddle], 
		(err, res) => {
		if (err) {throw err}
	}
	);
	res.send('ok')
}


const getDailyLog = (req, res) => {
	db.query('SELECT * FROM dailylogs', [], (err, res) => {
		if (err) { 
			throw err 
		}
		console.log(res.rows[0])
	})
	res.render('index', {
		title: 'logs in console...'
	})
}


module.exports = {
	addDailyLog,
	getDailyLog
}
