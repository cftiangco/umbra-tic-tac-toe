import { useState } from "react"
import { useLocation } from 'react-router-dom';

import Board from "../components/Board"
import Box from "../components/Box"

interface IScore {
    playerOne:number;
    playerTwo:number;
    draw:number;
}

const Game = () => {
    const location = useLocation();
    const data = location.state;

    const [board, setBoard] = useState(Array(9).fill(''))
    const [isXNext, setIsXNext] = useState<boolean>(true)
    const [score,setScore] = useState<IScore>({
        playerOne:0,
        playerTwo:0,
        draw:0
    })

    const handleOnClickBox = (index:number) => {
        const newBoard = [...board];

        if(board[index] !== "") {
            return;
        }

        newBoard[index] = isXNext ? 'X' : 'O'

        setBoard(newBoard)
        setIsXNext(!isXNext);

        if(checkWinner(newBoard)) {
            if(isXNext) {
                setScore(prevData => ({
                    ...prevData,
                    playerOne: prevData.playerOne + 1
                }))
            } else {
                setScore(prevData => ({
                    ...prevData,
                    playerTwo: prevData.playerTwo + 1
                }))
            }
        }

        if(checkIfDraw(board)) {
            setScore(prevData => ({
                ...prevData,
                draw: prevData.draw + 1
            }))
        }

    }

    const checkIfDraw = (board:any) => {
        let count = 1;

        board.map((b:any) => {
            if(b !== "") {
                count++;
            }
        })
        console.log(`count: `, count)
        return count >= 9 ? true : false
    }

    const checkWinner = (board:any) => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }

        return false;

    }

    return (
        <div className="h-screen">
            <Board>
                <div className="grid grid-cols-3 gap-1">
                    <Box onClickBox={() => handleOnClickBox(0)} value={board[0]}/>
                    <Box onClickBox={() => handleOnClickBox(1)} value={board[1]}/>
                    <Box onClickBox={() => handleOnClickBox(2)} value={board[2]}/>
                    <Box onClickBox={() => handleOnClickBox(3)} value={board[3]}/>
                    <Box onClickBox={() => handleOnClickBox(4)} value={board[4]}/>
                    <Box onClickBox={() => handleOnClickBox(5)} value={board[5]}/>
                    <Box onClickBox={() => handleOnClickBox(6)} value={board[6]}/>
                    <Box onClickBox={() => handleOnClickBox(7)} value={board[7]}/>
                    <Box onClickBox={() => handleOnClickBox(8)} value={board[8]}/>
                </div>

                <div className="flex-col items-center justify-center mt-4">
                    <div className="flex items-center justify-between text-white text-sm">
                        <h4 >Player 1: {data.playerOne.toUpperCase()} (X)</h4>
                        <h4>Player 2: {data.playerTwo.toUpperCase()} (O)</h4>
                    </div>
                    <div className="mt-3 flex flex-col items-center justify-center text-white text-lg font-bold">
                        <h3>{score.playerOne} - {score.draw} - {score.playerTwo}</h3>
                        <h5 className="text-sm font-normal">Score</h5>
                    </div>
                </div>

            </Board>
        </div>
    )
}

export default Game