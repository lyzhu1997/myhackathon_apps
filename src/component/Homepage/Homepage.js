import React from "react";
import { connect } from "react-redux";
import { appStartRun, appSuccessfullyLaunched } from "../../actions/appStartActions"
import './Homepage.css';
import Profile from '../Profile/Profile.js'; 
import Service from '../Service/Service.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Homepage extends React.Component{

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
            <Router>
            <div>

                <Switch>
                    <Route path='/home'>
                        <div className="navbar navbar-expand-lg navbar-light bg-white">
                            <a className="navbar-brand" href="#"><img className="brand-logo"
                                                                      src={require("../../assets/Logo.png")}
                                                                      alt="Logo"/></a>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-dark blue-nav">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-5 mr-auto">
                                    <Link class="nav-link active" to='/home'>Home <span
                                        className="sr-only">(current)</span></Link>
                                    <Link class="nav-link" to='/services'>Services</Link>
                                    <Link class="nav-link" to='/myinfo'>MyInfo</Link>
                                </div>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 nav-search-bar" type="search"
                                           placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>

                    <div class="my-container first-row my-5">
                        <div class="row mx-auto">
                            <div class="col-6">
                                <div class="card h-100 shadow-sm">
                                    <div class="card-body">
                                        <h6 class="card-title">NEWS</h6>
                                        <hr/>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card h-100">
                                    <div class="card-body shadow-sm">
                                        <h6 class="card-title">ANNOUNCEMENT</h6>
                                        <hr/>
                                        <ul>
                                            <li>Malaysia has now received medical aids from</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="banner ma-5">
                        <h5 class="text-center">
                            REGISTER HERE FOR MORE ONLINE SERVICE
                        </h5>
                    </div>

                    <div class="my-container second-row">
                        <div class="row h-400px px-5">
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <img src={require("../../assets/card1.jpg")} class="card-img-top" alt="people discussion"/>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <img src={require("../../assets/card2.jpg")} class="card-img-top" alt="Children"/>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <img src={require("../../assets/card3.jpg")} class="card-img-top" alt="Children"></img>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>


                <Route path='/services'>
                    <div className="navbar navbar-expand-lg navbar-light bg-white">
                        <a className="navbar-brand" href="#"><img className="brand-logo"
                                                                  src={require("../../assets/Logo.png")}
                                                                  alt="Logo"/></a>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark blue-nav">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-5 mr-auto">
                                <Link class="nav-link" to='/home'>Home</Link>
                                <Link class="nav-link active" to='/services'>Services <span className="sr-only">(current)</span></Link>
                                <Link class="nav-link" to='/myinfo'>MyInfo</Link>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 nav-search-bar" type="search"
                                       placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <Service/> 
                </Route>

                <Route path='/myinfo'>
                    <div className="navbar navbar-expand-lg navbar-light bg-white">
                        <a className="navbar-brand" href="#"><img className="brand-logo"
                                                                  src={require("../../assets/Logo.png")}
                                                                  alt="Logo"/></a>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark blue-nav">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-5 mr-auto">
                                <Link class="nav-link" to='/home'>Home</Link>
                                <Link class="nav-link" to='/services'>Services</Link>
                                <Link class="nav-link active" to='/myinfo'>MyInfo <span className="sr-only">(current)</span></Link>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 nav-search-bar" type="search"
                                       placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <Profile/>
                </Route>


                    <Route path='/'>
                        <div className="navbar navbar-expand-lg navbar-light bg-white">
                            <a className="navbar-brand" href="#"><img className="brand-logo"
                                                                      src={require("../../assets/Logo.png")}
                                                                      alt="Logo"/></a>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-dark blue-nav">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-5 mr-auto">
                                    <Link class="nav-link active" to='/home'>Home <span
                                        className="sr-only">(current)</span></Link>
                                    <Link class="nav-link" to='/services'>Services</Link>
                                    <Link class="nav-link" to='/myinfo'>MyInfo</Link>
                                </div>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 nav-search-bar" type="search"
                                           placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>

                        <div class="my-container first-row my-5">
                            <div class="row mx-auto">
                                <div class="col-6">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-body">
                                            <h6 class="card-title">NEWS</h6>
                                            <hr/>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card h-100">
                                        <div class="card-body shadow-sm">
                                            <h6 class="card-title">ANNOUNCEMENT</h6>
                                            <hr/>
                                            <ul>
                                                <li>Malaysia has now received medical aids from</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="banner ma-5">
                            <h5 class="text-center">
                                REGISTER HERE FOR MORE ONLINE SERVICE
                            </h5>
                        </div>

                        <div class="my-container second-row">
                            <div class="row h-400px px-5">
                                <div class="col-4">
                                    <div class="card h-100 shadow-sm">
                                        <img src={require("../../assets/card1.jpg")} class="card-img-top" alt="people discussion"/>
                                        <div class="card-body">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card h-100 shadow-sm">
                                        <img src={require("../../assets/card2.jpg")} class="card-img-top" alt="Children"/>
                                        <div class="card-body">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card h-100 shadow-sm">
                                        <img src={require("../../assets/card3.jpg")} class="card-img-top" alt="Children"></img>
                                        <div class="card-body">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Route>

                </Switch>


            <footer>
                <div class="footer-nav">
                    <div class="container">
                        <div class="row pt-4">
                            <div class="col-4">
                                <h5>CONTACT US</h5>

                            </div>

                            <div class="col-4">
                                <h5>ACCESS PAGE</h5>
                            </div>
                            <div class="col-4">
                                <h5>NUMBER OF VISITOR</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="footer-bar"> 
                    <p>© 2020 EZFORM All Rights Reserved</p>
                </div>
            </footer>

            </div>
            </Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);