import { IScore } from "../interfaces"


interface IScoreBoard {
    playerOneName:string,
    playerTwoName:string,
    score:IScore
}

const ScoreBoard = ({
    playerOneName,
    playerTwoName,
    score,
}:IScoreBoard) => {
    return (
        <div className="flex-col items-center justify-center mt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white text-sm">
                <h4 className="font-bold">Player 1: {playerOneName} (X)</h4>
                <h4 className="font-bold">Player 2: {playerTwoName} (O)</h4>
            </div>
            <div className="mt-3 flex flex-col items-start md:items-center justify-center text-white text-lg font-bold">
                <h3>{score.playerOne} - {score.draw} - {score.playerTwo}</h3>
                <h5 className="text-sm font-normal">Score</h5>
            </div>
        </div>
    )
}

export default ScoreBoard