import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';
import appStartReducer from "./appStartReducer";
import registrationReducer from "./registrationReducer";

const allReducers = combineReducers({
    appStart : appStartReducer,
    loginForm : loginFormReducer,
    registration : registrationReducer,
})

export default allReducers;