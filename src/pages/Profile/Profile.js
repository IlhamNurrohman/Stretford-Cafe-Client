import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import profileImg from "../../assets/img/image 39.png";

import "./Profile2.css";
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
            isUpdated: false
        }
    }

    componentDidMount() {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
        //console.log(config);
        axios
            .get("http://localhost:8000/users/profile-detail", config)
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
    componentDidUpdate() {
        if (this.state.isUpdated) {
            const userInfo = JSON.parse(localStorage.getItem("userinfo"));
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
            //console.log(config);
            axios
                .get("http://localhost:8000/users/profile-detail", config)
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
    render() {
        if (this.state.isLoggedIn === false) {
            return <Navigate to="/Login" />
        }
        return (
            <div className="main">
            <Header />
            <div className="jumbotron">
              <h1 className="title">User Profile</h1>
              <div className="wrapper">
                <div className="profile">
                  <img src="" alt="" />
                  <div className="name">
                    <strong></strong>
                    <br />
                    
                  </div>
                  <div className="button">
                    <input type="file" hidden name="image" ref="" />
                    <button className="btn btn-warning chose" onClick="">
                      choose photo
                    </button>
                    <button className="btn btn-primary">Remove photo</button>
                    <button className="btn btn-light">Edit password</button>
                  </div>
                  <p className="text">
                    Do you want to save <br /> the change?
                  </p>
                </div>
                <div className="second-btn">
                  <input type="file" hidden />
                  <button className="btn btn-warning chose" onClick="">
                    Save Change
                  </button>
                  <button className="btn btn-primary">Cancel</button>
                  <button className="btn btn-light" onClick="">
                    Log out
                  </button>
                </div>
                <div className="forms">
                  <div className="radio-input">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input shadow-none" type="radio" name="gender" id="inlineRadio1" value="Male" onChange="" />
                      <label className="form-check-label male-label" for="inlineRadio1">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline female">
                      <input className="form-check-input shadow-none" type="radio" name="gender" id="inlineRadio2" value="Female" onChange="" />
                      <label className="form-check-label female-label" for="inlineRadio2">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="form-left">
                    <div className="contact">
                      <p>Contact</p>
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address :
                          </label>
                          <input type="email" className="form-control shadow-none" id="exampleInputEmail1" placeholder="" aria-describedby="emailHelp" name="email" onChange="" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">
                            Delivery adress :
                          </label>
                          <input type="text" className="form-control shadow-none" id="exampleInputPassword1" placeholder="" name="delivery_adress" onChange="" />
                        </div>
                      </form>
                    </div>
                    <div className="detail">
                      <p>Detail</p>
                      <form>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">
                            Display name :
                          </label>
                          <input type="text" placeholder="" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" name="display_name" onChange="" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">
                            First name :
                          </label>
                          <input type="text" placeholder="" className="form-control shadow-none" id="exampleInputPassword1" name="first_name" onChange="" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">
                            Last name :
                          </label>
                          <input type="text" placeholder="" className="form-control shadow-none" id="exampleInputPassword1" name="last_name" onChange="" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="mb-3 mobile-number">
                      <label for="exampleInputPassword1" className="form-label">
                        Mobile number :
                      </label>
                      <input type="text" placeholder="" className="form-control shadow-none" id="exampleInputPassword1" name="phone" onChange="" />
                    </div>
                    <div className="mb-3 dob">
                      <label for="exampleFormControlInput1" className="form-label">
                        DD/MM/YYYY:
                      </label>
                      <input type="date" placeholder="" className="form-control shadow-none" date aria-label="YYYY/MM/DD" name="dob" onChange="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
            {/* <Modal show={this.state.isShow} centered>
              <Modal.Body className="modal-body">
                <p className="modal-text">Are you sure to Log Out ?</p>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <div className="modal-btn">
                  <button className="btn btn-warning" onClick="">
                    no
                  </button>
                  <button className="btn btn-light" onClick="">
                    yes
                  </button>
                </div>
              </Modal.Footer>
            </Modal> */}
            <div id="snackbar">Berhasil update data</div>
          </div>
        );
    }
}