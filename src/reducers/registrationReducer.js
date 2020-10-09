import { 
    IC_MATCHED_REGISTRATION, 
    IC_NOT_MATCH_REGISTRATION, 
    LAUNCHING_REGISTRATION_PAGE, 
    REGISTRATION_PAGE_LAUNCHED, 
    SUBMIT_IC_REGISTRATION 
} from "../actions/registrationActions";
import simulator from "../simulator/data";

const initialState={
    isLoading:false,
    IC:null,
    matchIC:false,
    isSubmit:false,
    data:{
        firstName:"",
        lastName:"",
        ic:"",
        dob:"",
        placeOfBirth:"",
        parentName:"",
        parentIC:"",
        citizenship:"",
        deathRegistry:false,
        telNo: "",
    },
}

const registrationReducer = (state=initialState,action) =>{
    console.log(state)
    switch(action.type){
        case LAUNCHING_REGISTRATION_PAGE:
            return{
                ...state,
                isLoading:true,
            };
            
        case REGISTRATION_PAGE_LAUNCHED:
            return{
                ...state,
                isLoading:false,
            };

        case SUBMIT_IC_REGISTRATION:
            const dat = new simulator();
            const dataChecked = dat.checkData(action.IC);
            if(dataChecked.check)
                return{
                    ...state,
                    IC:action.IC,
                    matchIC:true,
                    data:dataChecked.data,
                    isSubmit:true
                }
            else return{
                ...state,
                IC:action.IC,
                matchIC:false,
                isSubmit:true
            }

        case IC_MATCHED_REGISTRATION:
            return{
                ...state,
                data:action.data
            }

        case IC_NOT_MATCH_REGISTRATION:
            return{
                ...state,
                data:action.data
            }

        default:
            return{
                ...state
            }
    }
}

export default registrationReducer;