const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 로그인: POST /api/auth/login
router.post('/login', authController.login);

// 회원가입: POST /api/auth/register
router.post('/register', authController.register);

module.exports = router;