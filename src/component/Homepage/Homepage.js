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
                <div class="navbar navbar-expand-lg navbar-light bg-white">
                    <a class="navbar-brand" href="#"><img class="brand-logo" src="../../assets/Logo.png" alt="Logo"/></a> 
                </div>
                <nav class="navbar navbar-expand-lg navbar-dark blue-nav">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-5 mr-auto">
                            <Link class="nav-link active" to='/home'>Home <span class="sr-only">(current)</span></Link>
                            <Link class="nav-link" to='/services'>Services</Link>
                            <Link class="nav-link" to='/myinfo'>MyInfo</Link>
                            <Link class="nav-link" to='/myinitiative'>MyInitiative</Link>
                        </div>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2 nav-search-bar" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <Switch>
                    <Route path='/home'>


                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                {/* <img src="../../assets/carousel.jpg" class="d-block w-100" alt=""> */}
                            </div>
                            <div class="carousel-item">
                                {/* <!-- <img src="" class="d-block w-100" alt=""> --> */}
                            </div>
                            <div class="carousel-item">
                                {/* <!-- <img src="" class="d-block w-100" alt=""> --> */}
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <div class="my-container first-row my-5">
                        <div class="row mx-auto">
                            <div class="col-4">
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
                            <div class="col-4">
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
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <div class="card-body">
                                        
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
                                    <img src="../../assets/card1.jpg" class="card-img-top" alt="people discussion"/>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <img src="../../assets/card2.jpg" class="card-img-top" alt="Children"/>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card h-100 shadow-sm">
                                    <img src="../../assets/card3.jpg" class="card-img-top" alt="Children"></img>
                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            
                </Route>

                <Route path='/services'>
                    <Service/> 
                </Route>

                <Route path='/myinfo'>
                    <Profile/>
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