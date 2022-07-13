import { LOGIN_USER, LOG_IN } from './action-types'

export function loginUser(payload) { 
    return { type : LOGIN_USER, payload } 
}

export function logIn(payload) { 
    return { type : LOG_IN, payload } 
}