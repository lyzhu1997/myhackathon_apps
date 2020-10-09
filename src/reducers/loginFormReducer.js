import { 
    IS_LOGIN_INTO_ACC,
    LOG_INTO_ACC,
    IS_REGIS_WITH_MYID
} from "../actions/loginFormActions"; 
const initialState = {
    isLoading : false,
    isLoggedIn : false,
    isRegis : false,
    username: ''
}


const loginFormReducer= (state = initialState, action) => {
    switch(action.type){
        case LOG_INTO_ACC:
            return{
                ...state,
                isLoading: false,
                username: action.username,
                isLoggedIn: true,   
            };
        case IS_LOGIN_INTO_ACC:
            return{
                ...state,
                isLoading:true,
            }
        case IS_REGIS_WITH_MYID:
            return {
                ...state,
                isRegis : true
            }

        default:
            return{
                ...state
            }
    }
}

export default loginFormReducer;