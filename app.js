const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Sequelize = require('sequelize');

const dailylog = require('./routes/dailylog');
const settings = require('./routes/settings');


// Set pug view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.render('landing');
})

app.use('/dailylog', dailylog);
app.use('/settings', settings);

app.listen(port, console.log(`Server listening on port ${port}`))
