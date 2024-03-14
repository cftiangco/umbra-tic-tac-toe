

interface IBox {
    onClickBox?:any;
    value?:string;
    
}

const Box = ({onClickBox,value}:IBox) => {
    return (
        <div 
            className="bg-gray-200 w-24 md:w-32 h-24 md:h-32 flex items-center justify-center rounded" 
            onClick={onClickBox}>
                <span className="text-5xl text-slate-700">{value}</span>
        </div>
    )
}

export default Box