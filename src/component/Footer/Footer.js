import React, { Component } from 'react'

import logo from "../../assets/icon/coffee 1.png";
import fbIcon from "../../assets/icon/Facebook.png";
import twIcon from "../../assets/icon/Twitter.png";
import igIcon from "../../assets/icon/Intagram.png";

export default class Footer extends Component {
    render() {
        return (
            <footer class="home-footer py-5">
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-md-8">
                            <h2 class="footer-brand"> <img src={logo}
                                alt="logo-icon" />&nbsp;Stretford Cafe</h2>
                            <p class="footer-text mt-3">Stretford Cafe is a store that sells some good meals, and especially coffee. We
                                provide high quality beans</p>
                                <img src={fbIcon} class="footer-fb-icon" alt="fb-icon" />
                                <img src={twIcon} class="footer-twitter-icon" alt="twitter-icon" />
                                <img src={igIcon} class="footer-ig-icon" alt="ig-icon" />
                                <p class="footer-home-copyright">@2022Stretford Cafe</p>
                            </div>
                                <div class="col-md-2">
                                    <h2 class="link-title">Product</h2>
                                    <div class="footer-home-link">
                                        <a href="">Download</a>
                                        <a href="">Pricing</a>
                                        <a href="">Locations</a>
                                        <a href="">Countries</a>
                                        <a href="">Blog</a>
                                    </div>
                                </div>
                                <div class="col-md-2 ">
                                    <h2 class="link-title">Engage</h2>
                                    <div class="footer-home-link">
                                        <a href="">Coffe Shop ?</a>
                                        <a href="">About Us</a>
                                        <a href="">FAQ</a>
                                        <a href="">Privacy Policy</a>
                                        <a href="">Terms of Service</a>
                                    </div>
                                </div>
                        </div>
                    </div>
            </footer>
        );
    }

}