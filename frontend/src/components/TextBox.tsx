
interface ITextBox {
    label:string;
    onChange?:any;
    value?:string;
}


const TextBox = ({label,value,onChange}:ITextBox) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-100" htmlFor="player1">{label} :</label>
            <input
                value={value}
                id="player1" 
                type="text"
                onChange={(e) => onChange(e)} 
                className="border border-teal-300 rounded-lg w-96 h-14 py-1 px-3 outline-none text-2xl"
            />
        </div>
    )
}

export default TextBox