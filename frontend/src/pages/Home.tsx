
import { useState } from "react"

import Button from "../components/Button"
import TextBox from "../components/TextBox"

const Home = () => {

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
        console.log(`start`)
    }

    return (
        <div className="flex h-screen w-full">
            <div className="bg-red-100 h-full w-full">1</div>

            <div className="h-full w-full flex flex-col items-center justify-center">

                {rightScreen === 1 && (
                    <Button 
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
                            <Button 
                                label="Back"
                                onClick={() => setRightScreen(1)} 
                            />
                            <Button 
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
                            <Button 
                                label="Back"
                                onClick={() => setRightScreen(2)} 
                            />
                            <Button 
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