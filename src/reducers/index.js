import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';


const allReducers = combineReducers({
    loginForm : loginFormReducer,
})

export default allReducers;