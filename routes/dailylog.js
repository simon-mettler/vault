const express = require('express');
const router = express.Router();

const { addDailyLog, getDailyLog } = require('../controllers/dailylog');

router.route('/').get(getDailyLog).post(addDailyLog);

module.exports = router;
