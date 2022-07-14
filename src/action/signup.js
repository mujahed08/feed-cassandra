import { SIGN_UP } from "./action-types";

export function signup(payload) { 
    return { type : SIGN_UP, payload } 
}