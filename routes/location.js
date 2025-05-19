const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// 경로 요청 처리
router.post('/path', locationController.getEscapePath);

module.exports = router;