import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import asaidImg from "../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import logo from "../../../assets/icon/coffee 1.png";
//import googleIcon from "../../../assets/icon/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import fbIcon from "../../../assets/icon/Facebook.png";
import twIcon from "../../../assets/icon/Twitter.png";
import igIcon from "../../../assets/icon/Intagram.png";

import "./Forgot.css";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isError: false,
            errorMsg: "",
            email: "",
            isSuccess: false,
        };
    };
    componentDidMount() {
        document.title = "Forgot Password";
    }
    render() {
        // if (this.state.isSuccess === true) {
        //     return <Navigate to="/resetpassword" />
        // }
        return (
            <div className="container">
                <div className="column-image">
                    <img src={asaidImg} className="side-image" alt="aside" />
                </div>
                <div className="column-main">
                    <header className="side-title">
                        <h2 className="header-title"><img src={logo} alt="logo-icon" />Stretford Cafe</h2>
                    </header>
                    <section className="register">
                        <form className="register-form">
                            <h3 className="forgot-text">Forgot your password?</h3>
                            <p className="capt-text"> Don’t worry, we got your back! </p>
                            <input type="text" name="phone" placeholder="Enter your email adress to get link"
                                onChange={(e) => {
                                    this.setState({
                                        email: e.target.value,
                                    });
                                }} />
                            <div className="register-button"
                                onClick={() => {
                                    const { email } = this.state;
                                    // const body = { email };
                                    axios
                                        .get(`${process.env.REACT_APP_API_HOST}/auth/forgot-password/${email}`)
                                        .then((result) => {
                                            console.log(result);
                                            let x = document.getElementById("snackbar");
                                            x.className = "show";
                                            setTimeout(function () {
                                                x.className = x.className.replace("show", "");
                                            }, 3000);
                                            this.setState({
                                                isSuccess: true
                                            })
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                            let x = document.getElementById("toast");
                                            x.className = "show";
                                            setTimeout(function () {
                                                x.className = x.className.replace("show", "");
                                            }, 3000);
                                            this.setState({
                                                isError: true,
                                                errorMsg: error.response.data.err.msg,
                                            });
                                        });
                                }}>Send</div>
                        </form>
                        <section className="already-account">
                            <p className="already-account-text">Click here if you didn’t receive any link in 2 minutes
                                01:52</p>
                        </section>
                        <div className="login-here-button" onclick="window.location.href='login.html'">Resend Link</div>
                    </section>
                    <footer>
                        <aside className="describe" aria-label="">
                            <h2 className="footer-title"><img src={logo} className="logo" alt="logo-icon" />Stretford Cafe</h2>
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
                        <div id="snackbar">Please check your email for password confirmation</div>
                        <div id="toast">{this.state.errorMsg ? this.state.errorMsg : "Register gagal !"}</div>
                    </footer>
                </div>
            </div>
        );
    }
}