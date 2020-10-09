import React from 'react';
import { connect } from "react-redux";
import { isLoginIntoAcc, isRegisWithMyid, logIntoAcc } from "../../actions/loginFormActions";
import './login.css';
import Preregistration from "../registrationPage/Preregistration.js";
import Homepage from "../Homepage/Homepage.js";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={
            isLoading:false,
            isLoggedIn:false,
            isRegis:false,
            username:''
        }
    }

    componentDidMount(){    
        const { isLoginIntoAcc } = this.props;
        console.log("check Run")
        isLoginIntoAcc();
    }

    handleChange(e, item) {
        this.setState({...this.state, [item]: e.target.value})
    }

    handleSubmit(e, withMyid) {
        const {isRegisWithMyid, logIntoAcc} = this.props;
        e.preventDefault();
        if (withMyid) {
            isRegisWithMyid();
        }
        else {
            logIntoAcc();
        }
    }

    render(){
            const {isRegis, isLoggedIn} = this.props;
            return( 
                <div>
                {(!isRegis && !isLoggedIn) && (
                    <div className="rectangle2">
                        <form>
                            <div className="title">LOGIN PAGE</div>
                            <input type="text" className="textLong" placeholder="Enter name" onChange={(e)=>this.handleChange(e, "username")}/>
                            <input type="password" className="textLong" placeholder="Enter password"/>
                            
                            <button type="submit" className="submitBttn" onClick={(e)=>this.handleSubmit(e, false)}>
                                Login
                            </button>
                            <button type="submit" className="submitBttn"  onClick={(e)=>this.handleSubmit(e, true)}>
                                Login With MYID
                            </button>
                        </form>
                    </div>
                    )}
                {isRegis && <Preregistration/>}
                {isLoggedIn && <Homepage/>}
                </div>
                    
            )
    };
}

const mapStateToProps = (state,ownProps) => state.loginForm;
const mapDispatchToProps = (dispatch) => {
    return{
        isLoginIntoAcc :()=> dispatch(isLoginIntoAcc()),
        isRegisWithMyid :()=> dispatch(isRegisWithMyid()),
        logIntoAcc :()=> dispatch(logIntoAcc()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm);
