import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/icon/coffee 1.png";
import chat from "../../assets/icon/chat (1) 1.png";
import profile from "../../assets/img/image 39 (1).png";
//import { render } from '@testing-library/react';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            isSearch: true,
            setSearchName: props,
            role: localStorage.getItem('role') || null,
        }
    }
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        //console.log(this.state.role)
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-white" style={{ borderBottom: "0.5px solid rgba(159, 159, 159, 1)" }}>
                    <div className="container-fluid">
                        <div className="navbar-brand"><img src={logo} alt="logo-icon" />Stretford Cafe</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-auto navbar" id="navbarNav">
                            {this.state.role !== "admin" ? 
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)"}} to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page"style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/product">
                                                Product
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/payment">
                                                Your Cart
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/history">
                                            History
                                        </Link>
                                    </li>
                                </ul>
                            :
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/product">
                                            Product
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="#">
                                            Order
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" style={{ textDecoration: "none", color: "rgba(106, 64, 41, 1)" }} to="/dashboard">
                                            Dashboard
                                        </Link>
                                </li>
                            </ul>
                            }
                            {this.state.isLoggedIn ?
                                <div className="right-nav">
                                    <input
                                        type="search"
                                        placeholder="Search"
                                        style={{ borderRadius: "30px", marginTop: "-8px", width: "20%", height: "40px", marginRight: "10px", paddingLeft: "10px" }}
                                        onChange={(e) => this.props.setSearchName(e.target.value)}
                                    />
                                    <button className="btn position-relative" type="submit"><img src={chat} alt="submit" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            1
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <span className="navbar-text">
                                        <Link to="/profile">
                                            <img src={profile}
                                                style={{ borderRadius: "100px", paddingLeft: "10%" }} alt="profile"/></Link></span>
                                </div>
                                :
                                <div className="right-nav">
                                    <span className="navbar-text"><Link style={{ textDecoration: "none" }} to="/login">
                                        Login
                                    </Link></span>
                                    <Link style={{ textDecoration: "none" }} to="/register"><button className="btn" style={{ background: "rgba(255, 186, 51, 1)", borderRadius: "50px", color: "rgba(106, 64, 41, 1)" }}>Sign Up</button></Link>
                                </div>
                            }



                        </div>
                    </div>
                </nav>
            </header>

        );
    }

}
export default Header