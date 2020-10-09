import React from 'react';
import './registration.css';
import { connect } from 'react-redux';

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userData:{
                Name:"",
                IC:"",
                dob:"",
                placeOfBirth:"",
                parentName:"",
                parentIC:"",
                citizenship:""
            },
            MYstates:[
                "",
                "Kedah",
                "Perak",
                "Kuala Lumpur",
                "Pulau Pinang",
                "Perlis",
                "Kelantan",
                "Kedah",
                "Johor",
                "Terengganu",
                "Sabah",
                "Sarawak",
                "Putrajaya",
                "Melaka",
                "Pahang",
                "Negeri Sembilan",
                "Selangor"
            ]
        }
    }

    onChange(e,item) {
        this.setState({userData:{...this.state.userData, [item]: e.target.value}})
    }

    onSubmit = (data) => console.log(data);
    render(){
        const {userData, MYstates} = this.state;
        return (
            <div className="bg">
                <div>
                    <form onSubmit={()=>this.onSubmit()}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" onClick={()=>this.onSubmit(this.state.userData)}>Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type='text' value={userData.name} name='name' onChange={(e)=>this.onChange(e,"name")}/><br/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">IC</label>
                            <div className="col-sm-10">
                                <input className="form-control" type='text' value={MYstates.IC} name='ic' onChange={(e)=>this.onChange(e,"ic")}/><br/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Date of Birth</label><br/>
                            <div className="col-sm-10">
                                <input className="form-control" name='birthdate' type='date' onChange={(e)=>this.onChange(e,"dob")}/><br/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Place of Birth</label>
                            <div className="col-sm-10">
                                <select className="form-control" onChange={(e)=>this.onChange(e,"placeOfBirth")} value={MYstates.placeOfBirth} name='placeOfBirth' >
                                    {MYstates.map((state)=>(
                                        <option value={state}>{state}</option>
                                    ))}
                                </select><br/>
                            </div>
                            
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Parent Info / Next-of-Kin info</label>
                            <div className="col-sm-10">
                                <input className="form-control" type='text' placeholder='Name' name='parentName' onChange={(e)=>this.onChange(e,"parentName")}/><br/>
                                <input className="form-control" type='text' placeholder='IC' name='parentIC'  onChange={(e)=>this.onChange(e,"parentIC")}/><br/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Citizenship status</label>
                            <div className="col-sm-10">
                                <select className="form-control" onChange={(e)=>this.onChange(e,"citizenship")} name="citizenship">
                                    <option value='malaysian'>Malaysian</option>
                                    <option value='nonmalaysian'>Non Malaysian</option>
                                </select><br/>
                            </div>
                        </div>
                        
                        <button className="btn btn-primary center" onClick={()=>this.onSubmit(this.state.userData)}>submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state,ownProps)=>state.registration;
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);