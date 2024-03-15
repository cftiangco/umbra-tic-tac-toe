
const express = require('express');
const router = express.Router();

const {storeGame,getAllGames} = require('../controllers/game.controller')

router.post('/', storeGame);
router.get('/', getAllGames);

module.exports = router;