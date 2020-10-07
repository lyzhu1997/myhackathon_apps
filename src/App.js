import React from 'react';
import './App.css';
import Preregistration from './Preregistration.js';

// import './App.css';
import LoginForm from './component/loginPage/loginForm';

class App extends React.Component {
  render(){
    return( 
      <React.Fragment>
        <div>
          <Preregistration/>
        </div>
        {/* <LoginForm /> */}
      </React.Fragment>
    )
  };
}

export default App;
