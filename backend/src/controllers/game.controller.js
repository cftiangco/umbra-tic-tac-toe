
const Game = require('../models/game.model')

const storeSession = async(req,res) => {
    const {score,playerOne,playerTwo} = req.body
    
    try {
        
        let newSession = {
            score: score,
            playerOneName: playerOne,
            playerTwoName: playerTwo,
        }

        const game = new Game(newSession)
        await game.save();
        res.status(201).json(game);
    } catch( error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    storeSession,
}