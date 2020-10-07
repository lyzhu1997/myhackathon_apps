export const LOG_INTO_ACC = "LOG_INTO_ACC";
export function logIntoAcc(username){
    return{
        type: "LOG_INTO_ACC",
        username,
    };
}

export const IS_LOGIN_INTO_ACC = "IS_LOGIN_INTO_ACC";
export function isLoginIntoAcc(){
    return{
        type: "IS_LOGIN_INTO_ACC"
    };
}