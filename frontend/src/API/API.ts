import { ISession } from "../interfaces";


export const storeSession = async (session:ISession) => {
    const response = await fetch('http://127.0.0.1:8000/game', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(session)
    });
    if (!response.ok) {
        throw new Error('Failed, unable to store session.')
    }
    return response.json()
}

export const getAllSessions = async () => {
    const response = await fetch('http://127.0.0.1:8000/game')

    if(!response.ok) {
        throw new Error('Unable to fetch sessions')
    }

    
    return response.json();
}