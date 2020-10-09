import React from 'react';
import './App.css';
import { connect,useDispatch } from "react-redux";
import Preregistration from './component/registrationPage/Preregistration.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DummyWebPage from "./component/dummyWebPage/dummyWebpage";
import Registration from './component/registrationPage/Registration';

class App extends React.Component {
  render(){
    return( 
      <div>
        <Registration />
      </div>
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

