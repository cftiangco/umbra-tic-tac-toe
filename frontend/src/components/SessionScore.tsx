

interface ISessionScore {
    score:number,
    label:string
}

const SessionScore = ({score,label}:ISessionScore) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="border w-8 h-6 bg-slate-300">
                <p className="text-slate-800 m-0 p-0 text-center text-sm">{score}</p>
            </div>
            <span className="text-xs mt-1 text-slate-400">{label}</span>
        </div>
    )
}

export default SessionScore