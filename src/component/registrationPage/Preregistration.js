import React from 'react';
import { connect } from 'react-redux';
import Registration from './Registration';
import { 
    icMatchedRegistration,
    submitICRegistration,
 } from "../../actions/registrationActions";
 import './Preregistration.css';

class Preregistration extends React.Component{

    constructor(props){
        super(props);
        this.state={
            IC:""
        }
    }

    onChange(e) {
        console.log(e.target.value)
        this.setState({IC:e.target.value})
    }

    handleOnclick(e){
        const { submitICRegistration,icMatchedRegistration } = this.props;
        e.preventDefault();
        icMatchedRegistration();
    }

    handleVerify(e){
        const {icMatchedRegistration,submitICRegistration} = this.props;
        e.preventDefault();
        submitICRegistration(this.state.IC);
    }

    render(){
        const { submitICRegistration,isSubmit, matchIC } = this.props;
        return (
            <div className="bg">
                {!isSubmit&&(
                    <div className="rectangle1">
                        <form>
                            <div className="title">LOGIN WITH MYID</div>
                            <input className="textLong" placeholder="Enter IC" type='text' name='ic' onChange={(e)=>this.onChange(e)}/><br/>    
                            <button className="submitBttn" onClick={(e)=>this.handleVerify(e)}>Verify</button>                       
                            {matchIC&&(
                            <React.Fragment>
                                <input className="textLong" placeholder="Enter the TAC number" type='text' name='ic' onChange={(e)=>this.onChange(e)}/><br/>
                                <button className="submitBttn" onClick={(e)=>this.handleOnclick(e)}>Submit</button>
                            </React.Fragment>
                            )}
                        </form>
                    </div>
                    )}
                {isSubmit && <Registration/>}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>state.registration;
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        submitICRegistration:(IC)=>dispatch(submitICRegistration(IC)),
        icMatchedRegistration:()=>dispatch(icMatchedRegistration())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preregistration);