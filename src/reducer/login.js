import { LOG_IN } from "../action/action-types";


const INITIAL_STATE = {
    session : {}
}
  
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOG_IN :
            return {...state, session : action.payload}
        default : return state;
    }
}