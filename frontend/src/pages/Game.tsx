import { useState } from "react"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Board from "../components/Board"
import Box from "../components/Box"
import GameModal from "../components/GameModal";

import { IPlayers,IScore,IGameModal,ISession } from "../interfaces";

import { storeSession } from "../API/API";

const Game = () => {
    const location = useLocation();
    const data:IPlayers = location.state;

    const navigate = useNavigate();

    const [board, setBoard] = useState(Array(9).fill(''))
    const [isXNext, setIsXNext] = useState<boolean>(true)
    const [score,setScore] = useState<IScore>({
        playerOne:0,
        playerTwo:0,
        draw:0
    })
    const [gameModal,setGameModal] = useState<IGameModal>({
        visible: false,
        message: '',
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
                setGameModal({message:'Player 1 win!',visible:true})
            } else {
                setScore(prevData => ({
                    ...prevData,
                    playerTwo: prevData.playerTwo + 1
                }))
                setGameModal({message:'Player 2 win!',visible:true})
            }
        }

        if(checkIfDraw(board)) {
            setScore(prevData => ({
                ...prevData,
                draw: prevData.draw + 1
            }))
            setGameModal({message:'Draw!',visible:true})
        }

    }

    const checkIfDraw = (board:any) => {
        let count = 1;

        board.map((b:any) => {
            if(b !== "") {
                count++;
            }
        })
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

    const handleOnClickContinue = () => {
        setGameToDefault()
    }

    const handleOnClickStop = async () => {

        let session:ISession = {
            score: score,
            playerOne: data.playerOneName,
            playerTwo: data.playerTwoName,
        }

        try {
            await storeSession(session);
            setGameToDefault()
            navigate('/');
        } catch (error) {
            alert('Failed: Unable to store session')
        }
    }

    const setGameToDefault = () => {
        setBoard(Array(9).fill(''))
        setIsXNext(true)
        setGameModal({visible:false,message:''})
    }

    return (
        <div className="h-screen">
            <GameModal 
                visible={gameModal.visible}
                message={gameModal.message}
                onClickContinue={handleOnClickContinue}
                onClickStop={handleOnClickStop}
            />
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
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white text-sm">
                        <h4 className="font-bold">Player 1: {data.playerOneName.toUpperCase()} (X)</h4>
                        <h4 className="font-bold">Player 2: {data.playerTwoName.toUpperCase()} (O)</h4>
                    </div>
                    <div className="mt-3 flex flex-col items-start md:items-center justify-center text-white text-lg font-bold">
                        <h3>{score.playerOne} - {score.draw} - {score.playerTwo}</h3>
                        <h5 className="text-sm font-normal">Score</h5>
                    </div>
                </div>

            </Board>
        </div>
    )
}

export default Game