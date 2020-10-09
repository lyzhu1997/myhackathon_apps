import React from 'react';
import { connect } from "react-redux";
import { isLoginIntoAcc, isRegisWithMyid, logIntoAcc } from "../../actions/loginFormActions";
import Preregistration from "../registrationPage/Preregistration.js";
import Homepage from "../Homepage/Homepage.js";
import './loginForm.css';

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
                    <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-5">
                            <img className="brand-logo" src={require("../../assets/Logo.png")} alt="logo"/>
                            <div className="main-content">
                                <h2 className="text-center">Sign In</h2>
                                <form className="signin-form">
                                        <input type="text" placeholder="IC" onChange={(e)=>this.handleChange(e, "username")}/>
                                        <input type="password" placeholder="password"/>
                                        <button type="submit" className="btn" onClick={(e)=>this.handleSubmit(e, false)}>
                                            Sign In
                                        </button>
                                        <button type="submit" className="btn"  onClick={(e)=>this.handleSubmit(e, true)}>
                                            Sign up With MYID
                                        </button>
                                    </form>
                            </div>
                        </div>
                        <div class="col-7 px-0">
                            <img class="cover-img" src={require("../../assets/cover.jpg")} alt="cover image"/>
                        </div>
                    </div>
                    </div>


                )}                        

                <div>
                    {isRegis && <Preregistration/>}
                    {isLoggedIn && <Homepage/>}
                </div>
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
