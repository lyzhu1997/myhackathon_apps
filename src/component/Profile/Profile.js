import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
            return( 
                <div>
                        <div class="container profile-body">
                            <h1>Profile</h1>

                            <div class="card text-center profile-card">
                                <div class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">Personal Details</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Education</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Health</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Others</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body profile-card-body">
                                    <div class="row ma-3">
                                        <div class="col-4">
                                            <img class="profile-pic" src="../../assets/Profile_pic.png" alt=""/>
                                        </div>
                                        <div class="col-8">
                                            <table>
                                                <tr>
                                                    <td>IC</td>
                                                    <td>961122-08-5428</td>
                                                </tr>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Suparman bin Batman</td>
                                                </tr>
                                                <tr>
                                                    <td>Date of Birth</td>
                                                    <td>22 November 1995</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <td>Race</td>
                                                    <td>Malay</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>460, Jalan Banyan, Taman Pokok Desa, <br/>
                                                        50450 Kuala Lumpur.</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
                    
            )
    };
}

export default Profile;
