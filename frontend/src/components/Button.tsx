 
 interface IButton {
    label:string;
    onClick?:any;
    type?:string;
    disabled?:boolean;
 }


 const setTypeColor = (type:string) => {
    switch(type) {
        case 'primary':
            return "bg-teal-500 hover:bg-teal-400 text-slate-100";
        case 'danger':
            return "bg-red-500 hover:bg-red-400 text-slate-100";
        case 'light':
            return "bg-gray-400 hover:bg-gray-300 text-slate-100";
        case 'disabled':
            return "bg-gray-600 text-slate-400 cursor-not-allowed"
    }
 }

 export const XSButton = ({label,onClick,type="primary"}:IButton) => {

    let color = setTypeColor(type)

    return (
        <button
            onClick={onClick} 
            className={`${color} font-bold w-24 h-10 rounded-lg shadow text-sm`}>
                {label}
        </button>
    )
 }

 export const SMButton = ({label,onClick,type="primary",disabled}:IButton) => {
   
    let color = setTypeColor(type)

    return (
        <button
            onClick={disabled ? null:onClick} 
            className={`${color} font-bold w-32 h-11 rounded-lg shadow`}>
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
