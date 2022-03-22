const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const db = require('./db');

// Set pug view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: false}));

app.get('/dailylog', (req, res) => {
	db.query('SELECT * FROM dailylogs', [], (err, res) => {
		if (err) { 
			throw err 
		}
		console.log(res.rows[0])
	})
	res.render('index', {
		title: 'Test Title'
	})
})

app.post('/dailylog', (req, res) => {
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
})


app.listen(port, console.log(`Server listening on port ${port}`))
