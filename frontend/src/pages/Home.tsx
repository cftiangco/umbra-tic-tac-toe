
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import {SMButton, LGButton} from "../components/Button"
import TextBox from "../components/TextBox"

import { IPlayers } from "../interfaces";

import { getAllSessions } from "../API/API";
import SessionStats from "../components/SessionStats";

/* 
    SCREENS:
    1 = Start New Game
    2 = Input Player One name
    3 = Input Player Two name
*/

const Home = () => {

    const navigate = useNavigate();

    const [playerOne,setPlayerOne] = useState<string>('')
    const [playerTwo,setPlayerTwo] = useState<string>('')
    const [rightScreen,setRightScreen] = useState<number>(1)

    const [sessions,setSessions] = useState<any>([]);

    const handleOnChangePlayerOne = (value:string) => {
        setPlayerOne(value);
    }

    const handleOnChangePlayerTwo = (value:string) => {
        setPlayerTwo(value);
    }

    const handleStart = () => {
        const data:IPlayers = {
            playerOneName: playerOne,
            playerTwoName: playerTwo,
        }
        navigate('/game', {state:data});
    }

    const fetchSessions = async () => {
        
        try {
            const response = await getAllSessions();
            setSessions(response)
            console.log(response)
        } catch (error) {
            alert('Failed: Unable to get all session')
        }
    }

    useEffect(() => {
        setPlayerOne('')
        setPlayerTwo('')
        setRightScreen(1)
        fetchSessions()
    },[])

    return (
        <div className="flex flex-col md:flex-row h-screen w-full">

            <div className="h-full w-full flex flex-col items-center justify-center">

                {rightScreen === 1 && (
                    <LGButton 
                        label="Start New Game"
                        onClick={() => setRightScreen(2)}
                    />
                )}

                {rightScreen === 2 && (
                    <div className="flex flex-col items-center gap-4">
                        <TextBox 
                            label="Player 1 Name"
                            value={playerOne}
                            onChange={(e:any) => handleOnChangePlayerOne(e.target.value)}
                        />
                        <div className="flex items-center gap-2">
                            <SMButton
                                type="light"  
                                label="Back"
                                onClick={() => setRightScreen(1)} 
                            />
                            <SMButton
                                type="primary"  
                                label="Next"
                                onClick={() => setRightScreen(3)} 
                            />
                        </div>
                    </div>
                )}

                {rightScreen === 3 && (
                    <div className="flex flex-col items-center gap-4">
                        <TextBox 
                            label="Player 2 Name"
                            value={playerTwo}
                            onChange={(e:any) => handleOnChangePlayerTwo(e.target.value)}
                        />
                        <div className="flex items-center gap-2">
                            <SMButton
                                type="light"
                                label="Back"
                                onClick={() => setRightScreen(2)} 
                            />
                            <SMButton 
                                label="Start"
                                type="primary"
                                onClick={handleStart} 
                            />
                        </div>
                    </div>
                )}

                
            </div>

            <div className="h-full w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="mb-6 text-slate-100 text-lg font-bold">Game History</h1>
                    <div className="max-h-96 overflow-y-auto w-96">
                        {sessions.map((row:any,idx:number) => (
                            <SessionStats
                                key={idx} 
                                playerOneName={row.playerOneName}
                                playerTwoName={row.playerTwoName}
                                playerOneScore={row.score.playerOne}
                                playerTwoScore={row.score.playerTwo}
                                draw={row.score.draw}
                                timestamp={row.createdAt}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home