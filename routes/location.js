const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// POST /api/location/
router.post('/', locationController.handleLocation);

module.exports = router;
