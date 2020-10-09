import React from 'react';
import { connect } from "react-redux";
import { isLoginIntoAcc, isRegisWithMyid, logIntoAcc } from "../../actions/loginFormActions";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
                <div className="container-fluid">
                <div className="row h-100">
                    <div className="col-5">
                    <img class="brand-logo" src="../../assets/Logo.png" alt="logo"/>
                {(!isRegis && !isLoggedIn) && (
                <div className="main-content">
                <form className="signin-form">
                        <h2 class="text-center">Sign In</h2>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" onChange={(e)=>this.handleChange(e, "username")}/>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                            </label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>this.handleSubmit(e, false)}>
                            Login
                        </button>
                        <button type="submit" className="btn btn-primary btn-block"  onClick={(e)=>this.handleSubmit(e, true)}>
                            Login With MYID
                        </button>
                </form>
                <div class="col-7 px-0">
                    <img class="cover-img" src="../../assets/cover.jpg" alt="cover image"/>
                </div>

                </div>
                )}
                </div>
                </div>
                </div>

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
