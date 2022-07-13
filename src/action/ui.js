import { SHOW_ERROR, LOADING, HIST_PUSH } from './action-types'

export function showError(error) { 
    return { type : SHOW_ERROR, error } 
}

export function loading(flag) { 
    return { type : LOADING, flag } 
}

export function histPush(path) { 
    return { type : HIST_PUSH, path } 
}