
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import {SMButton, LGButton} from "../components/Button"
import TextBox from "../components/TextBox"

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

    const handleOnChangePlayerOne = (value:string) => {
        setPlayerOne(value);
    }

    const handleOnChangePlayerTwo = (value:string) => {
        setPlayerTwo(value);
    }

    const handleStart = () => {
        const data = {
            playerOne: playerOne,
            playerTwo: playerTwo,
        }
        navigate('/game', {state:data});
    }

    return (
        <div className="flex h-screen w-full">
            <div className="bg-red-100 h-full w-full">1</div>

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
                                label="Back"
                                onClick={() => setRightScreen(1)} 
                            />
                            <SMButton 
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
                                label="Back"
                                onClick={() => setRightScreen(2)} 
                            />
                            <SMButton 
                                label="Start"
                                onClick={handleStart} 
                            />
                        </div>
                    </div>
                )}

                
            </div>


        </div>
    )
}

export default Home