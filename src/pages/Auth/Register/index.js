import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';

import asaidImg from "../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import logo from "../../../assets/icon/coffee 1.png";
import googleIcon from "../../../assets/icon/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import fbIcon from "../../../assets/icon/Facebook.png";
import twIcon from "../../../assets/icon/Twitter.png";
import igIcon from "../../../assets/icon/Intagram.png";

import "./Register.css";

export default class Register extends Component {
    state = {
        email: "",
        password: "",
        phone: "",
        //roles_id: "",
        isPasswordShown: false,
        isError: false,
        errorMsg: "",
        isSuccess: false,
    };
    render() {
        // if (this.state.isSuccess === true) {
        //     return <Navigate to="/Login" />
        // }
        <></>
        return (
            <div className="container">
                <div className="column-image">
                    <img src={asaidImg} className="side-image" alt="aside image" />
                </div>
                <div className="column-main">
                    <header className="side-title">
                        <img src={logo} alt="logo-icon" />
                        <h2 className="header-title">Stretford Cafe</h2>
                        <h1 className="page-title">Sign Up</h1>
                    </header>
                    <section className="register">
                        <form className="register-form">
                            <label htmlFOR="email">Email Address :</label>
                            <input type="text" name="email" placeholder="Enter your email address" onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                });
                            }} />
                            <label htmlFOR="password">Password :</label>
                            <input type={`${this.state.isPasswordShown ? "text" : "password"}`} name="password" placeholder="Enter your password" onChange={(e) => {
                                this.setState({
                                    password: e.target.value,
                                });
                            }} />
                            <label>
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
                            </label>
                            <label htmlFOR="phone">Phone Number :</label>
                            <input type="text" name="phone" placeholder="Enter your phone number" onChange={(e) => {
                                this.setState({
                                    phone: e.target.value,
                                });
                            }} />
                            <input type="hidden" name="roles_id" value="2" onChange={(e) => {
                                this.setState({
                                    phone: e.target.value,
                                });
                            }} />
                            <div className="register-button" onClick={() => {
                                const { email, password, phone } = this.state;
                                const body = {
                                    email,
                                    password,
                                    phone,
                                };
                                axios
                                    .post("http://localhost:8000/auth/new", body)
                                    .then((result) => {
                                        console.log(result);
                                        let x = document.getElementById("snackbar");
                                        x.className = "show";
                                        setTimeout(function () {
                                            x.className = x.className.replace("show", "");
                                        }, 3000);
                                        setTimeout(() => {
                                            this.props.history.push("/Login");
                                        }, 3001);
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
                            }}>Sign Up</div>
                        </form>
                        <div className="google-button">
                            <img className="google-icon"
                                src={googleIcon}
                                alt="google-icon" /> Sign Up with Google
                        </div>
                        <section className="already-account">
                            <div className="underline"></div>
                            <p className="already-account-text">Already have an account?</p>
                            <div className="underline"></div>
                        </section>
                        <div className="login-here-button"><Link to="/Login" style={{ textDecoration: "none", color: "#fffefe" }}>Login Here</Link></div>
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
                                <a href="">Download</a>
                                <a href="">Pricing</a>
                                <a href="">Locations</a>
                                <a href="">Countries</a>
                                <a href="">Blog</a>
                            </div>
                            <h2 className="link-title">Engage</h2>
                            <div className="link-item">
                                <a href="">Coffe Shop ?</a>
                                <a href="">About Us</a>
                                <a href="">FAQ</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of Service</a>
                            </div>
                        </aside>

                    <div id="snackbar">Sign Up berhasil,Silahkan Login</div>
                    <div id="toast">Sign Up gagal,silahkan coba kembali</div>;
                    </footer>

                </div>
            </div>
        );
    }
}