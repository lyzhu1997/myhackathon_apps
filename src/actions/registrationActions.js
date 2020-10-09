export const LAUNCHING_REGISTRATION_PAGE = "LAUNCHING_REGISTRATION_PAGE";
export function launchingRegistrationPage(){
    return{
        type:LAUNCHING_REGISTRATION_PAGE,
    }
}

export const REGISTRATION_PAGE_LAUNCHED = "REGISTRATION_PAGE_LAUNCHED";
export function registrationPageLaunched(){
    return{
        type:REGISTRATION_PAGE_LAUNCHED,
    }
}

export const SUBMIT_IC_REGISTRATION = "SUBMIT_IC_REGISTRATION";
export function submitICRegistration(IC){
    return{
        type: SUBMIT_IC_REGISTRATION,
        IC
    }
}

export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export function submitRegistration(Data){
    return{
        type:SUBMIT_REGISTRATION,
        data:Data
    }
}

export const IC_MATCHED_REGISTRATION = "IC_MATCHED_REGISTRATION";
export function icMatchedRegistration(){
    return{
        type:IC_MATCHED_REGISTRATION,
    }
}

export const IC_NOT_MATCH_REGISTRATION = "IC_NOT_MATCH_REGISTRATION";
export function icNotMatchRegistration(Data){
    return{
        type:IC_NOT_MATCH_REGISTRATION,
        data:Data
    }
}