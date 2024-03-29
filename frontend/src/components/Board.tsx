import React from "react";


interface IBoard {
    children: React.ReactNode
}

const Board = ({children}:IBoard) => {
    return (
        <div className="flex items-center justify-center w-full h-full cursor-pointer">
            <div>{children}</div>
        </div>
    )
}

export default Board;