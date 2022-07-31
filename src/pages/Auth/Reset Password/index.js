import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import asaidImg from "../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import logo from "../../../assets/icon/coffee 1.png";
// import googleIcon from "../../../assets/icon/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import fbIcon from "../../../assets/icon/Facebook.png";
import twIcon from "../../../assets/icon/Twitter.png";
import igIcon from "../../../assets/icon/Intagram.png";
import OpenEye from "../../../assets/icon/open-eye.png";
import ClosedEye from "../../../assets/icon/closed-eye.png";

import "./ResetPassword.css";

export default class Register extends Component {
    state = {
        email: "",
        newPassword: "",
        confirmCode: "",
        //roles_id: "",
        isPasswordShown: false,
        isError: false,
        errorMsg: "",
        isSuccess: false,
    };
    componentDidMount() {
        document.title = "Reset Password"
        
    }
    render() {
        // if (this.state.isSuccess === true) {
        //     return <Navigate to="/resetpassword" />
        // }
        <></>
        return (
            <div className="container">
                <div className="column-image">
                    <img src={asaidImg} className="side-image" alt="aside" />
                </div>
                <div className="column-main">
                    <header className="side-title">
                        <img src={logo} alt="logo-icon" />
                        <h2 className="header-title-register">Stretford Cafe</h2>
                        {/* <h1 className="page-title-register">Sign Up</h1> */}
                    </header>
                    <section className="register">
                        <form className="register-form">
                            <label htmlFOR="email">Email Address :</label>
                            <input type="email" name="email" placeholder="Enter your email address" onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                });
                            }} />
                            <label htmlFOR="password">New Password :</label>
                            <div className='signup-input-pass-container'>
                                        <input type={this.state.isPasswordShown ? "email" : "password"} id="password" placeholder="Enter your new password" className='signup-input-pass' 
                                        style={{justifyContent: "space-between", marginLeft: "0%", marginTop: "1%"}}
                                            onChange={e => {
                                                this.setState({
                                                    newPassword: e.target.value,
                                                })
                                            }}
                                        />
                                        <div className="icon-pass-container"
                                            onClick={() => {
                                                this.setState({
                                                    isPasswordShown: !this.state.isPasswordShown
                                                })
                                            }}>
                                            {this.state.isPasswordShown ? <img src={OpenEye} alt="open-eye" className='pass-icon' /> : <img src={ClosedEye} alt="closed-eye" className='pass-icon' />}
                                        </div>
                                    </div>
                            <label htmlFOR="phone">Confirm Code :</label>
                            <input type="email" name="phone" placeholder="Enter confirmation code" 
                            onChange={(e) => {
                                this.setState({
                                    confirmCode: e.target.value,
                                });
                            }} />
                            <input type="hidden" name="roles_id" value="2" onChange={(e) => {
                                this.setState({
                                    phone: e.target.value,
                                });
                            }} />
                            <div className="register-button" onClick={() => {
                                const { email, newPassword, confirmCode } = this.state;
                                const body = { email, newPassword, confirmCode };
                                axios
                                    .patch(`${process.env.REACT_APP_API_HOST}/users/edit-password`, body)
                                    .then((result) => {
                                        console.log(result);
                                        let x = document.getElementById("snackbar");
                                        x.className = "show";
                                        setTimeout(function () {
                                            x.className = x.className.replace("show", "");
                                        }, 3000);
                                        this.setState({
                                            isSuccess: true,
                                            isError: false,
                                            errorMsg: "",
                                        });
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                        let x = document.getElementById("toast");
                                        x.className = "show";
                                        setTimeout(function () {
                                            x.className = x.className.replace("show", "");
                                        }, 5000);
                                        this.setState({
                                            isError: true,
                                            errorMsg: error.response.data.err.msg,
                                        });
                                    });
                            }}>Save</div>
                        </form>
                        <Link to="/login" className="login-here-button">Login Here</Link>
                        {/* <section className="already-account">
                            <div className="underline"></div>
                            <p className="already-account-text">Already have an account?</p>
                            <div className="underline"></div>
                        </section> */}
                        {/* <Link to="/login" className="login-here-button">Login Here</Link> */}
                    </section>
                    <footer>
                        <aside className="describe" aria-label="">
                            <img src={logo} className="logo" alt="logo-icon" />
                            <h2 className="footer-title">Stretford Cafe</h2>
                            <p className="footer-text">Stretford Cafe is a store that sells some good meals, and especially coffee.
                                We provide high quality beans</p>
                            <img src={fbIcon} alt="facebook-icon" />
                            <img src={twIcon} alt="twitter-icon" />
                            <img src={igIcon} alt="instagram-icon" />
                            <p className="footer-text">@2022Stretford Cafe</p>
                        </aside>
                        <aside className="link" aria-label="">
                            <h2 className="link-title">Product</h2>
                            <div className="link-item">
                                <Link to="#">Download</Link>
                                <Link to="#">Pricing</Link>
                                <Link to="#">Locations</Link>
                                <Link to="#">Countries</Link>
                                <Link to="#">Blog</Link>
                            </div>
                            <h2 className="link-title">Engage</h2>
                            <div className="link-item">
                                <Link to="#">Coffe Shop ?</Link>
                                <Link to="#">About Us</Link>
                                <Link to="#">FAQ</Link>
                                <Link to="#">Privacy Policy</Link>
                                <Link to="#">Terms of Service</Link>
                            </div>
                        </aside>

                    <div id="snackbar">Password changed, please login !</div>
                    <div id="toast">{this.state.errorMsg ? this.state.errorMsg : "Invalid confirmation code !"}</div>
                    </footer>

                </div>
            </div>
        );
    }
}