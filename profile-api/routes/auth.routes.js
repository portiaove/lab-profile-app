const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const secure = require('../middlewares/secure.mid');

router.post('/register', auth.register);
router.post('/authenticate', auth.authenticate);
router.get('/logout', auth.logout);
router.get('/profile', secure.isAuthenticated, auth.getProfile);
// TODO: logout, get profile & edit profile routes

module.exports = router;
