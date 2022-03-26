const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Sequelize = require('sequelize');

const models = require('./models/index.js')

const dailylog = require('./routes/dailylog');


// Set pug view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	//models.log_type.create({name: 'Testlog Type', unit: 'kg', data_type: 'bool', is_daily: true, is_active: false })
	res.render('landing');
})

app.use('/dailylog', dailylog);

app.listen(port, console.log(`Server listening on port ${port}`))
