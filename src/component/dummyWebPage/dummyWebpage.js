import { connect } from "react-redux";
import { appStartRun, appSuccessfullyLaunched } from "../../actions/appStartActions"
import React from "react";


class DummyWebPage extends React.Component{

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
            <div>
                <h1>HOMEPAGE</h1>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(DummyWebPage);