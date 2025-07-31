const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Defines the endpoint: POST /api/auth/register
router.post('/register', registerUser);

// Defines the endpoint: POST /api/auth/login
router.post('/login', loginUser);

module.exports = router;