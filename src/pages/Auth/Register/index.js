import React, { Component } from "react";

import asaidImg from "../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import logo from "../../../assets/icon/coffee 1.png";
import googleIcon from "../../../assets/icon/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import fbIcon from "../../../assets/icon/Facebook.png";
import twIcon from "../../../assets/icon/Twitter.png";
import igIcon from "../../../assets/icon/Intagram.png";

import "./Register.css";

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="column-image">
                    <img src={asaidImg} className="side-image" alt="aside image" />
                </div>
                <div className="column-main">
                    <header className="side-title">
                        <img src={logo} alt="logo-icon" />
                        <h2 className="header-title">Stretford Coffee</h2>
                        <h1 className="page-title">Sign Up</h1>
                    </header>
                    <section className="register">
                        <form className="register-form">
                            <label for="email">Email Address :</label>
                            <input type="text" name="email" placeholder="Enter your email address" />
                            <label for="password">Password :</label>
                            <input type="password" name="password" placeholder="Enter your password" />
                            <label for="phone">Phone Number :</label>
                            <input type="text" name="phone" placeholder="Enter your phone number" />
                            <div className="register-button">Sign Up</div>
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
                        <div className="login-here-button" onclick="window.location.href='login.html'">Login Here</div>
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
                    </footer>
                </div>
            </div>
        );
    }
}