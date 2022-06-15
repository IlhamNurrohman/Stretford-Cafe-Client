import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';

import asaidImg from "../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import logo from "../../../assets/icon/coffee 1.png";
import googleIcon from "../../../assets/icon/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import fbIcon from "../../../assets/icon/Facebook.png";
import twIcon from "../../../assets/icon/Twitter.png";
import igIcon from "../../../assets/icon/Intagram.png";
import OpenEye from "../../../assets/icon/open-eye.png";
import ClosedEye from "../../../assets/icon/closed-eye.png";

import "./Login.css";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isSuccess: false,
            isPasswordShown: false,
            isError: false,
            errorMsg: "",
            isLoggedin: false
        };
    };
    componentDidMount(){
        document.title = "Login"
    }
    render() {
        // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        // console.log(userInfo.token)
        if (this.state.isSuccess === true) {
            return <Navigate to="/" />
        }
        <></>
        return (
            <div className="container">
                <div className="column-image">
                    <img src={asaidImg} className="side-image" alt="aside-image"/>
                </div>
                <div className="column-main">
                    <header className="side-title">
                        <img src={logo} alt="logo-icon" />
                        <h2 className="header-title">Stretford Coffee</h2>
                        <h1 className="page-title">Login</h1>
                    </header>
                    <section className="register">
                        <form className="register-form">
                            <label htmlFOR="email">Email Address :</label>
                            <input type="email" clasaName="email" placeholder="Enter your email address" onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                });
                            }} />
                            <label htmlFOR="password">Password :</label>
                            <div className='signup-input-pass-container'>
                                        <input type={this.state.isPasswordShown ? "email" : "password"} id="password" placeholder="Enter your password" className='signup-input-pass' 
                                        style={{justifyContent: "space-between", marginLeft: "0%", marginTop: "1%"}}
                                            onChange={e => {
                                                this.setState({
                                                    password: e.target.value,
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
                            {/* <input type={`${this.state.isPasswordShown ? "email" : "password"}`} className="password" placeholder="Enter your phone password" onChange={(e) => {
                                this.setState({
                                    password: e.target.value,
                                });
                            }} />
                            <div className="icon-pass-container"
                                onClick={() => {
                                    this.setState({
                                        isPasswordShown: !this.state.isPasswordShown
                                    })
                                }}>
                                {this.state.isPasswordShown ? <img src={OpenEye} alt="open-eye" className='pass-icon' /> : <img src={ClosedEye} alt="closed-eye" className='pass-icon' />}
                            </div> */}
                            <Link to={"/forgotPassword"} style={{ textDecoration: "none", fontFamily: "Rubik" }}><p className="" style={{ textDecoration: "none", fontFamily: "Rubik" }}>Forgot Password?</p></Link>
                            {/* <label>
                                <input
                                    type="checkbox"
                                    value={this.state.isPasswordShown}
                                    onChange={() => {
                                        this.setState({
                                            isPasswordShown: !this.state.isPasswordShown,
                                        });
                                    }}
                                />
                                Show Password
                            </label> */}
                            <div className="register-button" onClick={() => {
                                const { email, password } = this.state;
                                const body = { email,password };
                                axios
                                    .post(`${process.env.REACT_APP_API_HOST}/auth`, body)
                                    .then((result) => {
                                        //console.log(result.data);
                                        localStorage.setItem("userinfo", JSON.stringify(result.data.data));
                                        localStorage.setItem("role", result.data.data.auth);
                                        this.setState({
                                            isSuccess: true
                                        })
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        let x = document.getElementById("snackbar");
                                        x.className = "show";
                                        setTimeout(function () {
                                            x.className = x.className.replace("show", "");
                                        }, 3000);
                                        this.setState({
                                            isError: true,
                                            errorMsg: error.response.data.err.msg,
                                        });
                                    });
                            }}>Login</div>
                        </form>
                        <div className="google-button">
                            <img className="google-icon"
                                src={googleIcon}
                                alt="google-icon" /> Login with Google
                        </div>
                        <section className="already-account">
                            <div className="underline"></div>
                            <p className="already-account-text">Don't have an account?</p>
                            <div className="underline"></div>
                        </section>
                        <div className="login-here-button"><Link to="/Register" style={{ textDecoration: "none", color: "#fffefe" }}>Sign Up Here</Link></div>
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
                        <div id="snackbar">Password atau email salah</div>
                    </footer>
                </div>
            </div>
        );
    }
}