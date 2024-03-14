 
 interface IButton {
    label:string;
    onClick?:any;
 }

 const Button = ({label,onClick}:IButton) => {
    return (
        <button
            onClick={onClick} 
            className="bg-teal-400 text-slate-100 font-bold w-32 h-11 rounded-lg shadow hover:bg-teal-500">
                {label}
        </button>
    )
 }

 export default Button