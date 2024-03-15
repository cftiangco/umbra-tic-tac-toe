export interface IScore {
    playerOne:number;
    playerTwo:number;
    draw:number;
}

export interface IGameModal {
    visible:boolean;
    message:string;
}

export interface IPlayers {
    playerOneName: string
    playerTwoName: string
}

export interface ISession {
    score: Object,
    playerOne: string,
    playerTwo: string,
}
