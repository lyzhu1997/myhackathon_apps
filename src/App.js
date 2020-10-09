import React from 'react';
import './App.css';
import { connect } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/loginPage/loginForm.js';
import Registration from "./component/registrationPage/Registration";

class App extends React.Component {
  render(){
    return( 
      <React.Fragment>
        <div className="App">
              <Registration />
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

