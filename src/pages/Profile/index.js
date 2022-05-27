import React, { Component } from "react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import profileImg from "../../assets/img/image 39.png";

import "./Profile.css";

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="profile-row">
                    <div className="container-fluid">
                        <h3 className="user-profile">User Profile</h3>
                        <div className="card g-0" style={{maxWidth: "1000px", height: "900px", borderRadius: "10px", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.22)"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container-fluid img-container">
                                        <img src={profileImg} className="img-profile" alt="img-profile"/>
                                    </div>
                                    <h4 className="username">Zulaikha</h4>
                                    <p className="email">zulaikha17@gmail.com</p>
                                    <div className="choose-photo">
                                        <button type="button" className="btn btn-warning" style={{width: "65%"}}>Choose Photo</button>
                                    </div>
                                    <div className="remove-photo">
                                        <button type="button" className="btn"
                                            style={{width: "65%", background: "rgba(106, 64, 41, 1)", color: "#fffefe"}}>Remove
                                            Photo</button>
                                    </div>
                                    <div className="edit-pw">
                                        <button type="button" className="btn btn-outline-dark"
                                            style={{width: "65%", color: "rgba(106, 64, 41, 1)", borderRadius: "20px"}}>Edit
                                            Password</button>
                                    </div>
                                    <div className="container title-submit">
                                        <p>Do you want to save the change?</p>
                                    </div>
                                    <div className="remove-photo">
                                        <button type="button" className="btn"
                                            style={{background: "rgba(106, 64, 41, 1)", color: "#fffefe", width: "65%", borderRadius: "30px"}}>Save
                                            Photo</button>
                                    </div>
                                    <div className="choose-photo">
                                        <button type="button" className="btn btn-warning"
                                            style={{width: "65%", borderRadius: "30px"}}>Cancel</button>
                                    </div>
                                    <div className="edit-pw">
                                        <button type="button" className="btn btn-outline-dark"
                                            style={{width: "65%", color: "rgba(106, 64, 41, 1)", borderRadius: "20px"}}>Log Out</button>
                                    </div>
                                </div>
                                <div className="col-md-8 card-form">
                                    <div className="card" style={{width: "550px", height: "100%", borderRadius: "10px", 
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.22)", borderBottom: "10px solid #6A4029"}}>
                                        <h4 className="form-title">Contact</h4>
                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label for="label-input" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="inputEmail4" placeholder="Enter email address" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="label-input" className="form-label">Mobile Number</label>
                                                <input type="text" className="form-control" placeholder="Enter mobile number" id="mobile-number" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-6">
                                                <label for="label-input" className="form-label">Delivery adress :</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Enter delivery address" style={{border: "none"}}/>
                                            </div>
                                            <h4 className="form-title">Details</h4>
                                            <div className="col-md-6">
                                                <label for="label-input" className="form-label">Display name :</label>
                                                <input type="text" className="form-control" id="display-name" placeholder="Enter display name" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="label-input" className="form-label">DD/MM/YY</label>
                                                <input type="date" className="form-control" id="date" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-8">
                                                <label for="label-input" className="form-label">First name :</label>
                                                <input type="text" className="form-control" id="first-name" placeholder="Enter first name" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-8">
                                                <label for="label-input" className="form-label">Last name :</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Enter last name" style={{border: "none"}}/>
                                            </div>
                                            <div className="col-md-6">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label forName="label-input" className="form-label">Male</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                                <label forName="label-input" className="form-label">Female</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}