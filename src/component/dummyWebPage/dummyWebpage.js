import { connect } from "react-redux";
import { appStartRun, appSuccessfullyLaunched } from "../../actions/appStartActions"
import React from "react";


class dummyWebPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            render:false
        }
    }
    componentDidMount(){
        const { appStartRun,appSuccessfullyLaunched } = this.props;
        appStartRun();
        setTimeout(function(){
            this.setState({render:true})
        }.bind(this),500);
        appSuccessfullyLaunched();
    }

    render(){
        return( 
                <form>
                    <h3>Login Page</h3>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label>
                            Password:
                        </label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>
                    <button type="submit" className="btn btn-primary btn-block" >
                        Login With MYID
                    </button>
                </form>

        )
    };

}

const mapStateToProps = (state,ownProps) =>state;

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        appStartRun : () => dispatch(appStartRun()),
        appSuccessfullyLaunched : () => dispatch(appSuccessfullyLaunched()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(dummyWebPage);