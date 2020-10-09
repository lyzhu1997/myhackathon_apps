import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';
import appStartReducer from "./appStartReducer";
import registrationReducer from "./registrationReducer";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
    appStart : appStartReducer,
    loginForm : loginFormReducer,
    registration : registrationReducer,
    data:dataReducer,
})

export default allReducers;