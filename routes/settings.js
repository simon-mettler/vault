const express = require('express');
const router = express.Router();

const { displaySettings, addLogType } = require('../controllers/settings');

router.route('/').get(addLogType).post(addLogType);

module.exports = router;
