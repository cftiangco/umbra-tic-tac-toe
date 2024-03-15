import { ISession } from "../interfaces";


const BASE_API = "http://127.0.0.1:8000";

export const storeSession = async (session:ISession) => {
    const response = await fetch(`${BASE_API}/game`, {
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
    const response = await fetch(`${BASE_API}/game`)

    if(!response.ok) {
        throw new Error('Unable to fetch sessions')
    }

    return response.json();
}