import { 
    CHECK_DATA_IN_SIMULATOR, LOG_DATA_FROM_SIMULATOR, UPDATE_DATA_TO_STATE 
} from "../actions/dataActions";
import simulator from "../simulator/data";


const initialState ={
    data:null,
    isExist:false
}

const dataReducer = (state=initialState,action) =>{
    switch(action){
        case UPDATE_DATA_TO_STATE:
            return{
                isExist:true,
                data:action.data
            }
        
        case CHECK_DATA_IN_SIMULATOR:
            const sim = new simulator();
            let check = sim.checkData(action.IC);
            if(check.check)
                return{
                    ...state,
                    isExist:true
                }
            else return{
                ...state,
                isExist:false
            }
        case LOG_DATA_FROM_SIMULATOR:
            const simulator = new simulator();
            let data = simulator.checkData(action.IC).data;
            return{
                isExist:true,
                data:data
            }
        
        default:
            return{
                ...state
            }
    }
}

export default dataReducer;