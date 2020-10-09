import React from 'react';
import { connect } from 'react-redux';
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

    handleOnclick(e){
        const { submitICRegistration } = this.props;
        e.preventDefault();
        submitICRegistration(this.state.IC);
    }

    render(){
        const { submitICRegistration,isSubmit } = this.props;
        return (
            <div className="bg">
                {!isSubmit&&(<form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Enter IC</label>
                        <div className="col-sm-10">
                            <input className="form-control" type='text' name='ic' onChange={(e)=>this.onChange(e)}/><br/>
                        </div>
                    </div>
                    <button className="btn btn-primary center" onClick={(e)=>this.handleOnclick(e)}>Submit</button>
                </form>)}
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