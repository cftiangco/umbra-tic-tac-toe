const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    score: {
        type: Object,
        required: true
    },
    playerOneName: {
        type: String,
        required: true,
    },
    playerTwoName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;