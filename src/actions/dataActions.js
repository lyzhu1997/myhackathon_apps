export const LOG_DATA_FROM_SIMULATOR = "LOG_DATA_FROM_SIMULATOR";
export function logDataFromSimulator(IC){
    return{
        type: LOG_DATA_FROM_SIMULATOR,
        IC
    }
}

export const UPDATE_DATA_TO_STATE = "UPDATE_DATA_TO_STATE";
export function updateDataToState(data){
    return{
        type:UPDATE_DATA_TO_STATE,
        data
    }
}

export const CHECK_DATA_IN_SIMULATOR = "CHECK_DATA_IN_SIMULATOR";
export function checkDataInSimulator(IC){
    return{
        type:CHECK_DATA_IN_SIMULATOR,
        IC
    }
}