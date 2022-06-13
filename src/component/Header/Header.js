import React, { Component } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from "../../assets/icon/coffee 1.png";
import chat from "../../assets/icon/chat (1) 1.png";
import profile from "../../assets/img/image 39 (1).png";
import { render } from '@testing-library/react';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
        }
    }
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-white" style={{ borderBottom: "0.5px solid rgba(159, 159, 159, 1)" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <img src={logo} alt="logo-icon" />Stretford Cafe</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-auto navbar" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#"><Link style={{ textDecoration: "none" }} to="/">
                                        Home
                                    </Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">
                                        <Link style={{ textDecoration: "none" }} to="/product">
                                            Product
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page">
                                        <Link style={{ textDecoration: "none" }} to="/payment">
                                            Your Cart
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link style={{ textDecoration: "none" }} to="/history">
                                        History
                                    </Link></a>
                                </li>
                            </ul>
                            {this.state.isLoggedIn ?
                            <div className="right-nav">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    style={{ borderRadius: "30px", marginTop: "-8px", width: "20%", height: "40px", marginRight: "10px", paddingLeft: "10px" }}
                                // onChange={(event) => {
                                //     event.preventDefault();
                                //     const { categories, page } = props;
                                //     if (location.search.includes("categories")) {
                                //         navigate(
                                //             `/product?categories=${categories}&page=${page}&name=${event.target.value}`
                                //         );
                                //     }
                                //     if (!location.search.includes("categories")) {
                                //         navigate(`/product?find=${event.target.value}`);
                                //     }
                                // }}
                                />
                                <button className="btn position-relative" type="submit"><img src={chat} alt="" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <span className="navbar-text">
                                    <Link to="/profile">
                                        <img src={profile}
                                            style={{ borderRadius: "100px", paddingLeft: "10%" }} /></Link></span>
                            </div>
                                :
                                <div className="right-nav">
                                    <span className="navbar-text"><a href="" style={{ textDecoration: "None" }}><Link style={{ textDecoration: "none" }} to="/Login">
                                        Login
                                    </Link></a></span>
                                    <a href="register.html"><button className="btn" style={{ background: "rgba(255, 186, 51, 1)", borderRadius: "50px", color: "rgba(106, 64, 41, 1)" }}>Sign Up</button></a>
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