import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useHistory } from 'react-router'
import Registration from './Registration';

function Preregistration() {
    const history = useHistory();
    const [state, setState] = useState(0);

    function onChange(e) {
        const value = e.target.value;
        setState(value);
    }

    return (
        <Router>
            <div class="bg">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Enter IC</label>
                        <div class="col-sm-10">
                            <input class="form-control" type='text' name='ic' onChange={onChange}/><br/>
                        </div>
                    </div>
                    <Link to='/registration'>
                        <button class="btn btn-primary center ">Submit</button>
                    </Link>
                </form>
                
                <Switch>
                    <Route path="/registration">
                        <Registration ic={state}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Preregistration;