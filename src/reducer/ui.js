import { LOADING } from '../action/action-types'

const INITIAL_STATE = {
    loading : false,
    modalCount : 0
}
  
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING :
            return {...state, loading : action.flag}
        default : return state;
    }
}