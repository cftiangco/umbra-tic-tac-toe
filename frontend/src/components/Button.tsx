 
 interface IButton {
    label:string;
    onClick?:any;
 }

 export const SMButton = ({label,onClick}:IButton) => {
    return (
        <button
            onClick={onClick} 
            className="bg-teal-400 text-slate-100 font-bold w-32 h-11 rounded-lg shadow hover:bg-teal-500">
                {label}
        </button>
    )
 }

 export const LGButton = ({label,onClick}:IButton) => {
    return (
        <button
            onClick={onClick} 
            className="bg-teal-400 text-slate-100 font-bold w-64 h-12 rounded-lg shadow hover:bg-teal-500">
                {label}
        </button>
    )
 }
