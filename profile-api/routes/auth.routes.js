const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/register', auth.register);
router.post('/authenticate', auth.authenticate);
// TODO: authenticate, logout, get profile & edit profile routes

module.exports = router;
