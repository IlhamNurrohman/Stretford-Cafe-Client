import React, { Component } from 'react'

import logo from "../../assets/icon/coffee 1.png";

export default class Header extends Component {
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <img src={logo} alt="logo-icon" />Stretford Cafe</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="product.html">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Your Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">History</a>
                                </li>
                            </ul>
                            <div className="right-nav">
                                <span className="navbar-text"><a href="login.html" style={{textDecoration: "None !important"}}>Login</a></span>
                                <a href="register.html"><button className="btn" style={{background: "rgba(255, 186, 51, 1)", borderRadius: "50px", color: "rgba(106, 64, 41, 1)"}}>Sign Up</button></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    
        );
    }
    
}