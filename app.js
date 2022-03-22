const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const dailylog = require('./routes/dailylog');


// Set pug view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: false}));

app.use('/dailylog', dailylog);

app.listen(port, console.log(`Server listening on port ${port}`))
