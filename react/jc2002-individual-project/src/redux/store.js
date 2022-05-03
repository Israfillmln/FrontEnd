import { auth_reducers } from './reducers';
import { combineReducers } from 'redux'

export default combineReducers({
    auth: auth_reducers
})