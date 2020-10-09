import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router'
import Registration from './Registration';
import { 
    submitICRegistration,
 } from "../../actions/registrationActions";

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

    render(){
        const { submitICRegistration,isSubmit } = this.props;
        return (
            <div className="bg">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" onClick={()=>submitICRegistration(this.state.IC)} >Enter IC</label>
                        <div className="col-sm-10">
                            <input className="form-control" type='text' name='ic' onChange={(e)=>this.onChange(e)}/><br/>
                        </div>
                    </div>
                    <button className="btn btn-primary center" onClick={()=>submitICRegistration(this.state.IC)}>Submit</button>
                </form>
                {isSubmit && <Registration/>}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>state.registration;
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        submitICRegistration:(IC)=>dispatch(submitICRegistration(IC)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preregistration);