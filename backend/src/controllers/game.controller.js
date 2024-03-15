
const Game = require('../models/game.model')

const storeGame = async(req,res) => {
    const {score,playerOne,playerTwo} = req.body
    
    try {
        let newSession = {
            score: score,
            playerOneName: playerOne,
            playerTwoName: playerTwo,
        }

        const game = new Game(newSession)
        await game.save();
        console.log(`data saved: `,game)
        res.status(201).json(game);
    } catch( error) {
        console.log(`data not save: `,error.message)
        res.status(500).json({ message: error.message });
    }
}

const getAllGames = async (req,res) => {
    try {
        const games = await Game.find().sort({ createdAt: -1 });
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    storeGame,
    getAllGames,
}