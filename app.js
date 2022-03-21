const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const db = require('./db');

// Set pug view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: false}));

app.get('/test', (req, res) => {
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

app.post('/posttest', (req, res) => {
	console.log(req.body)
	res.send('ok')
})


app.listen(port, console.log(`Server listening on port ${port}`))
