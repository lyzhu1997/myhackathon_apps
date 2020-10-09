import React from 'react';
import './registration.css';
import { connect } from 'react-redux';

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userData:{
                citizenship:"",
                dob:"",
                ic:"",
                firstName:"",
                lastName:"",
                parentIC:"",
                parentName:"",
                placeOfBirth:""
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

        this.setState({userData:{...this.state.userData, [item]: e.target.value}});
    }

    onSubmit = (data) => console.log(data);
    render(){
        const {MYstates} = this.state;
        const {data} = this.props;
        return (
            <div className="bg">
                <div className="rectangle">
                    <form>
                        <div className="title">Register</div>
                        <input placeholder="IC" className="textLong" value={data.IC} type='text' name='ic' onChange={(e)=>this.onChange(e,"ic")}/><br/>
                        <input className="textShortLeft" type="text" value={data.name} placeholder="First Name" onChange={(e)=>this.onChange(e,"firstName")}></input>
                        <input className="textShortRight" type="text" value={data.familyName} placeholder="Last Name"onChange={(e)=>this.onChange(e,"lastName")}></input>
                        <input className="textLong" type="date" placeholder="Date of Birth"onChange={(e)=>this.onChange(e,"dob")}></input>
                        <select className="textLong" value={data.placeOfBirth} onChange={(e)=>this.onChange(e,"placeOfBirth")} name='placeOfBirth' >
                            {MYstates.map((state,key)=>(
                                <option key={key} value={state}>{state}</option>
                            ))}
                        </select>
                        <input className="textLong" type="text" value={data.parentName} placeholder="Parent / Next-Of-Kin name" onChange={(e)=>this.onChange(e,"parentName")}></input>
                        <input className="textLong" type="text" value={data.parentIC} placeholder="Parent / Next-Of-Kin IC number" onChange={(e)=>this.onChange(e,"parentIC")}></input>
                        <select className="textLong" value={data.citizenship} onChange={(e)=>this.onChange(e,"citizenship")} name="citizenship">
                            <option value=''></option>
                            <option value='malaysian'>Malaysian</option>
                            <option value='nonmalaysian'>Non Malaysian</option>
                        </select>
                        
                        <button className="submitBttn" onClick={()=>this.onSubmit(this.state.userData)}>Register</button>
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