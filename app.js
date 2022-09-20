const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;

const Sequelize = require('sequelize');

const dailylog = require('./routes/dailylog');
const settings = require('./routes/settings');


// Middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
	res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.use('/dailylog', dailylog);
app.use('/settings', settings);

app.listen(port, console.log(`Server listening on port ${port}`))
