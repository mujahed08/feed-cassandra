import { combineReducers } from 'redux';
import ui from './ui'
import login from './login'

export default combineReducers({
    ui, 
    login 
})