import React from 'react';
import './App.css';
import { connect } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/loginPage/loginForm.js';

class App extends React.Component {
  render(){
    return( 
      <React.Fragment>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <LoginForm />
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

