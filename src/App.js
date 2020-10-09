import React from 'react';
import './App.css';
import { connect,useDispatch } from "react-redux";
import Preregistration from './component/registrationPage/Preregistration.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DummyWebPage from "./component/dummyWebPage/dummyWebpage";

class App extends React.Component {
  render(){
    return( 
      <React.Fragment>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Preregistration />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  };
}

const mapStateToProps = (state,ownProps) => state;
const mapDispatchToProps = (dispatch) => {
    return{
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

