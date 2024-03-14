import React from "react";


interface IBoard {
    children: React.ReactNode
}

const Board = ({children}:IBoard) => {
    return (
        <div className="bg-red-500 flex items-center justify-center w-full h-full cursor-pointer">
            {children}
        </div>
    )
}

export default Board;