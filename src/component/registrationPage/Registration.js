import React from 'react';
import './registration.css';
import { connect } from 'react-redux';
import Homepage from '../Homepage/Homepage';

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isSubmit:false,
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

    onSubmit = (data) => {
        this.setState({isSubmit:true});
        console.log(data);
    }
    render(){
        const {MYstates} = this.state;
        const {data} = this.props;
        const {isSubmit} = this.state;
        return (
            <div>
            {!isSubmit&&(<div className="bg">
            <div className="rectangle">
                <form>
                    <div className="title">Register</div>
                    <input placeholder="IC" className="textLong" value={data.IC} type='text' name='ic' onChange={(e)=>this.onChange(e,"ic")}/><br/>
                    <input className="textShortLeft" type="text" value={data.name} placeholder="First Name" onChange={(e)=>this.onChange(e,"firstName")}></input>
                    <input className="textShortRight" type="text" value={data.familyName} placeholder="Last Name"onChange={(e)=>this.onChange(e,"lastName")}></input>
                    <input className="textLong" type="date" placeholder="Date of Birth"onChange={(e)=>this.onChange(e,"dob")}></input>
                    <select className="textLong" defaultValue={data.placeOfBirth} onChange={(e)=>this.onChange(e,"placeOfBirth")} name='placeOfBirth' >
                        {MYstates.map((state,key)=>(
                            <option key={key} value={state} selected={data.placeOfBirth === state}>{state}</option>
                        ))}
                    </select>
                    <input className="textLong" type="text" value={data.parentName} placeholder="Parent / Next-Of-Kin name" onChange={(e)=>this.onChange(e,"parentName")}></input>
                    <input className="textLong" type="text" value={data.parentIC} placeholder="Parent / Next-Of-Kin IC number" onChange={(e)=>this.onChange(e,"parentIC")}></input>
                    <select className="textLong" defaultValue={data.citizenship} onChange={(e)=>this.onChange(e,"citizenship")} name="citizenship">
                        <option value=''></option>
                        <option value='Malaysian'>Malaysian</option>
                        <option value='Nonmalaysian'>Non Malaysian</option>
                    </select>
                    
                    <button className="submitBttn" onClick={()=>this.onSubmit(this.state.userData)}>Register</button>
                </form>
            </div>
        </div>)}
{isSubmit && <Homepage/>}
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