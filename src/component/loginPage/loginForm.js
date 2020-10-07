import React from 'react';
import { Dispatch } from "redux";
import { connect,useDispatch } from "react-redux";
import { isLoginIntoAcc } from "../../actions/loginFormActions"

class LoginForm extends React.Component {
    state ={
        isLoading:false,
        isLoggedIn:false,
        username:''
    }

    componentDidMount(){
        const { isLoginIntoAcc } = this.props;
        isLoginIntoAcc();
    }

    render(){
        if(this.state.isLoading==false&&this.state.isLoggedIn==false)
            return( 
                <div className="loginForm">
                    <h3>Login Page</h3>
                    <form>
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" />
                        <br />
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password"/>
                        <br />
                        <button>
                            Login
                        </button>
                        <button>
                            Login With
                        </button>
                    </form>

                </div>
            )
        else return(
            <div>
                You have already logged in!
            </div>
        )
    };
}

const mapStateToProps = (state,ownProps) => state.loginForm;
const mapDispatchToProps = (dispatch) => {
    return{
        isLoginIntoAcc :()=> dispatch(isLoginIntoAcc()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm);
