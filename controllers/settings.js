const models = require('../models/index')

const addLogType = (req, res) => {

	if(req.method === 'POST') {

		// Convert checkboxes to boolean values.
		req.body.is_active = !!req.body.is_active;
		req.body.is_daily = !!req.body.is_daily;

		models.log_type.create(req.body);
	}

	res.render('add_log_type',{});

}

const displaySettings = (req, res) => {
	res.send('ok')
}


module.exports = {
	addLogType,
	displaySettings	
}
