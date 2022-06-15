import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import profileImg from "../../assets/img/image 39.png";

import "./Profile.css";
import axios from "axios";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            users: [],
            username: "",
            email: "",
            phone: "",
            date: "",
            address: "",
            gender: "",
            firstname: "",
            lastname: "",
            isUpdated: false,
            isShow: false,
        }
    }

    componentDidMount() {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
        //console.log(config);
        axios
            .get(`${process.env.REACT_APP_API_HOST}users/profile-detail`, config)
            .then(result => {
                //console.log(result.data.data[0])
                this.setState({
                    users: result.data.data[0]
                })
                this.setState({
                    getBirthday: this.state.users.birthday

                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidUpdate() {
        if (this.state.isUpdated) {
            const userInfo = JSON.parse(localStorage.getItem("userinfo"));
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
            //console.log(config);
            axios
                .get(`${process.env.REACT_APP_API_HOST}/users/profile-detail`, config)
                .then(result => {
                    console.log(result.data.data[0])
                    this.setState({
                        users: result.data.data[0]
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
    modalTrigger = () => {
        this.setState({ isShow: !this.state.isShow });
    };
    render() {
        if (this.state.isLoggedIn === false) {
            return <Navigate to="/Login" />
        }
        return (
            <div>
                <Header />
                <div className="profile-row">
                    <div className="container-fluid">
                        <h3 className="user-profile">User Profile</h3>
                        <div className="card g-0" style={{ marginLeft: "-50px", maxWidth: "1100px", height: "900px", borderRadius: "10px", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.22)" }}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container-fluid img-container">
                                        <img src={`${process.env.REACT_APP_API_HOST}${this.state.users.pictures}`} className="img-profile" alt="img-profile" />
                                    </div>
                                    <h4 className="username" style={{ marginLeft: "10px" }}>{this.state.users.username ? this.state.users.username : "Display Name"}</h4>
                                    <p className="email" style={{ paddingLeft: "30px" }}>{this.state.users.email ? this.state.users.email : "Email"}</p>
                                    {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>}
                                    <div className="choose-photo">
                                        <button type="button" className="btn btn-warning" style={{ width: "65%" }}>Choose Photo</button>
                                    </div>
                                    <div className="remove-photo">
                                        <button type="button" className="btn"
                                            style={{ width: "65%", background: "rgba(106, 64, 41, 1)", color: "#fffefe" }}>Remove
                                            Photo</button>
                                    </div>
                                    <div className="edit-pw">
                                        <button type="button" className="btn btn-outline-dark"
                                            style={{ width: "65%", color: "rgba(106, 64, 41, 1)", borderRadius: "20px" }}>Edit
                                            Password</button>
                                    </div>
                                    <div className="title-submit">
                                        <p>Do you want to save <br /> the change?</p>
                                    </div>
                                    <div className="remove-photo">
                                        <button type="button" className="btn"
                                            style={{ background: "rgba(106, 64, 41, 1)", color: "#fffefe", width: "65%", borderRadius: "30px" }} onClick={() => {
                                                const { email, phone, username, firstname, lastname, address, date, gender } = this.state;
                                                const body = { username, email, phone, address, date, gender, firstname, lastname };
                                                const userInfo = JSON.parse(localStorage.getItem("userinfo"));
                                                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
                                                axios
                                                    .patch(`${process.env.REACT_APP_API_HOST}/users`, body, config)
                                                    .then(result => {
                                                        console.log(result)
                                                        //alert(result.data.msg)
                                                        this.setState({
                                                            isUpdated: true
                                                        })
                                                        let x = document.getElementById("snackbar");
                                                        x.className = "show";
                                                        setTimeout(function () {
                                                            x.className = x.className.replace("show", "");
                                                        }, 3000);
                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                    })
                                            }}>Save
                                            Change</button>
                                    </div>
                                    <div className="choose-photo">
                                        <button type="button" className="btn btn-warning"
                                            style={{ width: "65%", borderRadius: "30px" }}>
                                            Cancel</button>
                                    </div>
                                    <div className="edit-pw">
                                        <button type="button" className="btn btn-outline-dark"
                                            style={{ width: "65%", color: "rgba(106, 64, 41, 1)", borderRadius: "20px" }} onClick={this.modalTrigger}>
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-8 card-form">
                                    <div className="card" style={{ width: "600px", height: "100%", borderRadius: "10px", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.22)", borderBottom: "10px solid #6A4029", marginRight: "-20px", marginBottom: "30px" }}>
                                        <h4 className="form-title">Contact</h4>
                                        <form className="row g-3">
                                            <div className="col-md-5">
                                                <label htmlFor="label-input" className="form-label">Email</label>
                                                <input type="email" className="input-form" id="inputEmail4" 
                                                placeholder={this.state.users.email ? this.state.users.email : "Enter email address"} 
                                                value={this.state.users.email}
                                                onChange={(e) => {
                                                    this.setState({
                                                        email: e.target.value
                                                    })
                                                }} style={{ marginTop: "-11px" }} />
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="label-input" className="form-label">Mobile Number</label>
                                                <input type="text" className="input-form" id="mobile-number"
                                                placeholder={this.state.users.phone ? this.state.users.phone : "Enter phone number"} 
                                                value={this.state.users.phone}
                                                onChange={(e) => {
                                                    this.setState({
                                                        phone: e.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="col-5">
                                                <label htmlFor="label-input" className="form-label">Delivery adress :</label>
                                                <input type="text" className="input-form" id="inputAddress" 
                                                placeholder={this.state.users.address ? this.state.users.address : "Enter delivery addres"} value={this.state.users.address}
                                                onChange={(e) => {
                                                    this.setState({
                                                        address: e.target.value
                                                    })
                                                }} />
                                            </div>
                                            <h4 className="form-title-details">Details</h4>
                                            <div className="col-md-5">
                                                <label htmlFor="label-input" className="form-label">Display name :</label>
                                                <input type="text" className="input-form" id="display-name" 
                                                placeholder={"Enter display name"} value={this.state.users.username}
                                                onChange={(e) => {
                                                    this.setState({
                                                        username: e.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="label-input" className="form-label">Birthday</label>
                                                <input type="date" className="input-form" id="date" 
                                                placeholder={this.state.users.date ? this.state.users.date : "Enter birthday"} 
                                                value={this.state.users.date}
                                                onChange={(e) => {
                                                    this.setState({
                                                        date: e.target.value
                                                    })
                                                }} style={{ marginTop: "-11px" }} />
                                            </div>
                                            <div className="col-5">
                                                <label htmlFor="label-input" className="form-label">First name :</label>
                                                <input type="text" className="input-form" id="first-name" 
                                                placeholder={this.state.users.firstname ? this.state.users.firstname : "Enter first name"} value={this.state.users.firstname}
                                                onChange={(e) => {
                                                    this.setState({
                                                        firstname: e.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="col-5">
                                                <label htmlFor="label-input" className="form-label">Last name :</label>
                                                <input type="text" className="input-form" id="inputAddress" 
                                                placeholder={this.state.users.lastname ? this.state.users.lastname : "Enter last name"} 
                                                value={this.state.users.lastname}
                                                onChange={(e) => {
                                                    this.setState({
                                                        lastname: e.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="col-md-5">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                                                checked={this.state.gender === "male"} id="flexRadioDefault1" value="male" onChange={() => {
                                                    this.setState({
                                                        gender: "male"
                                                    })
                                                }} />
                                                <label forName="label-input" className="form-label">Male</label>
                                            </div>
                                            <div className="col-md-5">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                                                checked={this.state.gender === "female"} id="flexRadioDefault1" value="female" onChange={() => {
                                                    this.setState({
                                                        gender: "female"
                                                    })
                                                }} />
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
                <Modal show={this.state.isShow} centered>
                    <Modal.Body className="modal-body">
                        <p className="modal-text" style={{ marginTop: "15px" }}>Are you sure to Log Out ?</p>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <div className="modal-btn">
                            <button className="btn btn-warning" onClick={this.modalTrigger}>
                                No
                            </button>
                            <button className="btn btn-danger" style={{ marginLeft: "10px" }}>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/login"
                                    onClick={() => {
                                        localStorage.removeItem("userinfo")
                                    }}>
                                    Yes
                                </Link>
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <div id="snackbar">Berhasil update data</div>
            </div>
        );
    }
}