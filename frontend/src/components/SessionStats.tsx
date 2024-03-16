import SessionScore from "./SessionScore"
import moment from "moment";

interface ISessionStats {
    playerOneName:string,
    playerTwoName:string,
    playerOneScore:number,
    playerTwoScore:number,
    draw:number,
    timestamp:any,
}

const SessionStats = ({
    playerOneName,
    playerTwoName,
    playerOneScore,
    playerTwoScore,
    timestamp,
    draw,
}:ISessionStats) => {
    return (
        <div className="w-80">
            <div className="flex items-center justify-between w-ful border-b border-slate-600 py-1">
                <div>
                    <h4 className="text-slate-100">
                        {playerOneName} <span className="text-xs">(P1)</span> vs. {playerTwoName} <span className="text-xs">(P2)</span>
                    </h4>
                    <span className="text-xs text-slate-400">{moment(timestamp).fromNow()}</span>
                </div>
                <div className="flex items-center gap-1">
                    <SessionScore 
                        label="P1"
                        score={playerOneScore}                                        
                    />

                    <SessionScore 
                        label="D"
                        score={draw}                                        
                    />

                    <SessionScore 
                        label="P2"
                        score={playerTwoScore}                                        
                    />
                </div>
            </div>
        </div>
    )
}

export default SessionStats