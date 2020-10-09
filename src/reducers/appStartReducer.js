import {
    APP_START_RUN, APP_SUCCESSFULLY_LAUNCHED
} from '../actions/appStartActions';

const initialState ={
    appLaunched:false,
    isLoading:false,
}

const appStartReducer=(state=initialState,action)=>{
    switch(action.type){
        case APP_START_RUN:
            return{
                ...state,
                isLoading:true,
            };
        
        case APP_SUCCESSFULLY_LAUNCHED:
            return{
                ...state,
                isLoading:false,
                appLaunched:true
            }

        default:
            return{
                ...state
            }
    }
}

export default appStartReducer;