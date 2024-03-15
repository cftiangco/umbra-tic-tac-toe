
const express = require('express');
const router = express.Router();

const {storeSession} = require('../controllers/game.controller')

router.post('/', storeSession);

module.exports = router;