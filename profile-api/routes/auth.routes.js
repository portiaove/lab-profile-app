const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/register', auth.register);
// TODO: authenticate, logout, get profile & edit profile routes

module.exports = router;
