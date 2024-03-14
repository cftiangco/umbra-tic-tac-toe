

interface IBox {
    onClickBox?:any;
    value?:string;
    
}

const Box = ({onClickBox,value}:IBox) => {
    return (
        <div 
            className="bg-gray-400 w-32 h-32 flex items-center justify-center" 
            onClick={onClickBox}>
                <span className="text-5xl">{value}</span>
        </div>
    )
}

export default Box