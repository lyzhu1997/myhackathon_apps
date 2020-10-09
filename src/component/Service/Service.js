import React from "react";
import './Service.css';

class Service extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div class="container service-container">
                    <h1>Services</h1>

                    <div class="row service-body">
                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/JPN.png")} alt="JPN Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Immigration Department of Malaysia</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/KKM.png")} alt="KKM Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Ministry of Health of Malaysia</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/JPJ.svg")} alt="JPJ Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Road Transport Department Malaysia</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/IDM.png")} alt="IDM Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Immigration Department of Malaysia</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/KPDNHEP.png")} alt="KPDNHEP Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Ministry of Domestic Trade and Consumer Affairs</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 service-col">
                            <div class="card service-card shadow-sm">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../assets/ServicesPic/PDM.png")} alt="JPN Logo"/>
                                    </div>
                                    <div class="col-8">
                                        <h6>Royal Malaysia Police</h6>
                                        <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices in sapien at posuere. Sed interdum neque ipsum, et fringilla tellus placerat in. Fusce venenatis mollis metus, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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
        )
    }
}

export default Service;