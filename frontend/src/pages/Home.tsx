
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

interface IValidation {
    error:boolean;
    message:string;
}

const Home = () => {

    const navigate = useNavigate();

    const [playerOne,setPlayerOne] = useState<string>('')
    const [playerTwo,setPlayerTwo] = useState<string>('')
    const [rightScreen,setRightScreen] = useState<number>(1)

    const [sessions,setSessions] = useState<any>([]);

    const [playerOneError, setPlayerOneError] = useState<IValidation>({
        error:true,
        message: ''
    })

    const [playerTwoError, setPlayerTwoError] = useState<IValidation>({
        error:true,
        message: ''
    })

    const handleOnChangePlayerOne = (value:string) => {
        if(value.length > 12) {
            setPlayerOneError({error:false,message:'The name cannot exceed 12 characters in length.'})
            return
        }

        if(value.length > 0) {
            setPlayerOneError({error:false,message:''})
        } else {
            setPlayerOneError({error:true,message:'Name is required and cannot be empty.'})
        }

        setPlayerOne(value);
    }

    const handleOnChangePlayerTwo = (value:string) => {
        if(value.length > 12) {
            setPlayerTwoError({error:false,message:'The name cannot exceed 12 characters in length.'})
            return
        }

        if(value.length > 0) {
            setPlayerTwoError({error:false,message:''})
        } else {
            setPlayerTwoError({error:true,message:'Name is required and cannot be empty.'})
        }
        
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
        } catch (error) {
            alert('Failed: Unable to get all session')
        }
    }

    const handleNextPlayerOne = () => {
        setRightScreen(3)
    }

    useEffect(() => {
        setPlayerOne('')
        setPlayerTwo('')
        setRightScreen(1)
        fetchSessions()
    },[])

    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <div className="h-full w-full flex flex-col items-center justify-center mt-10 md:mt-0">

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
                            error={playerOneError.message.length > 0}
                            errorMessage={playerOneError.message}
                        />
                        <div className="flex items-center gap-2">
                            <SMButton
                                type="light"  
                                label="Back"
                                onClick={() => setRightScreen(1)} 
                            />
                            <SMButton
                                type={playerOneError.error ? 'disabled':'primary'}
                                disabled={playerOneError.error}  
                                label="Next"
                                onClick={handleNextPlayerOne} 
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
                            error={playerTwoError.message.length > 0}
                            errorMessage={playerTwoError.message}
                        />
                        <div className="flex items-center gap-2">
                            <SMButton
                                type="light"
                                label="Back"
                                onClick={() => setRightScreen(2)} 
                            />
                            <SMButton 
                                type={playerTwoError.error ? 'disabled':'primary'}
                                disabled={playerTwoError.error}  
                                label="Start"
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
                        {sessions.length > 0 ? (
                            sessions.map((row:any,idx:number) => (
                                <SessionStats
                                    key={idx} 
                                    playerOneName={row.playerOneName}
                                    playerTwoName={row.playerTwoName}
                                    playerOneScore={row.score.playerOne}
                                    playerTwoScore={row.score.playerTwo}
                                    draw={row.score.draw}
                                    timestamp={row.createdAt}
                                />
                            ))
                        ):(
                            <h2 className="text-center text-slate-100 text-xs">No available data</h2>
                        )}
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home