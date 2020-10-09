import React from 'react';
import { connect } from "react-redux";
import { isLoginIntoAcc, isRegisWithMyid, logIntoAcc } from "../../actions/loginFormActions";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Preregistration from "../registrationPage/Preregistration.js";
import DummyWebPage from "../dummyWebPage/dummyWebpage.js";

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
                {(!isRegis && !isLoggedIn) && (<form>
                        <h3>Login Page</h3>
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
                </form>)}
                {isRegis && <Preregistration/>}
                {isLoggedIn && <DummyWebPage/>}
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
