import React from 'react';
import { connect } from "react-redux";
import { isLoginIntoAcc } from "../../actions/loginFormActions";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends React.Component {
    state ={
        isLoading:false,
        isLoggedIn:false,
        username:''
    }

    componentDidMount(){
        const { isLoginIntoAcc } = this.props;
        console.log("check Run")
        isLoginIntoAcc();
    }


    render(){
            return( 
                    <form>
                        <h3>Login Page</h3>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                            </label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Login
                        </button>
                        <button type="submit" className="btn btn-primary btn-block" >
                            Login With MYID
                        </button>
                    </form>

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
