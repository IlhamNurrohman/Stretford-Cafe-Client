import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import EditIcon from "../../assets/icon/edit-icon.png";
import Default from "../../assets/img/dummy-image.jpg";
import { connect } from 'react-redux';
import { getUserDataAction } from '../../redux/actionCreator/userData'
import { logoutAction } from '../../redux/actionCreator/auth'
import Loading from "../../component/loading";

import "./Profile.css";
import axios from "axios";

const mapStateToProps = (reduxState) => {
    const { 
        auth: { userInfo, isSuccess, isLoggedOut }, userData } = reduxState
    return { userInfo, isSuccess, isLoggedOut, userData }
}

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            // isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            users: [],
            username: "",
            email: "",
            phone: "",
            date: "",
            address: "",
            gender: "",
            firstname: "",
            lastname: "",
            pictures: null,
            isUpdated: false,
            image_src: "",
            use_src: true,
            isShow: false,
            isEdit: false,
            isLoggedOut: false,
            errorMsg: "",
            // isLoadingUser: false,
        };
        this.inputFile = React.createRef();
    }
    setData = () => {
        let body = new FormData();
        if (this.state.email !== "") {
            body.append("email", this.state.email);
        }
        if (this.state.pictures !== "") {
            body.append("pictures", this.state.pictures);
        }
        if (this.state.address !== "") {
            body.append("address", this.state.address);
        }
        if (this.state.username !== "") {
            body.append("username", this.state.username);
        }
        if (this.state.firstname !== "") {
            body.append("firstname", this.state.firstname);
        }
        if (this.state.lastname !== "") {
            body.append("lastname", this.state.lastname);
        }
        if (this.state.phone !== "") {
            body.append("phone", this.state.phone);
        }
        if (this.state.date !== "") {
            body.append("date", this.state.date);
        }
        if (this.state.gender !== "") {
            body.append("gender", this.state.gender);
        }
        return body;
    };
    fileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const users = { ...this.state };
        if (file) {
            users.pictures = file;
            this.setState(users);
            const reader = new FileReader();
            reader.onload = () => {
                // console.log(this.state.use_src);
                this.setState({ image_src: reader.result, use_src: false, pictures: file }, () => {
                });
            };
            reader.readAsDataURL(file);
        }
    };
    componentDidMount() {
        document.title = "Profile"
        // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
        const { token = null } = this.props.userInfo || {}
        const { isLoading, data } = this.props.userData
        //console.log(config);
        this.props.dispatch(getUserDataAction(token))
        if (!isLoading) {
            this.setState({
                users: data,
                email: data.email,
                phone: data.phone,
                username: data.username,
                first_name: data.first_name,
                last_name: data.last_name,
                address: data.address,
                date: data.date,
                gender: data.gender
            })
        }
        // .then(result => {
        //     //console.log(result.data.data[0])
        //     this.setState({
        //         users: result.data.data[0],
        //         image_src: this.state.users.use_src ? this.state.users.use_src : Default
        //     })
        // })
        // .catch(error => {
        //     console.log(error)
        // })

    }
    componentDidUpdate() {
        const { token } = this.props.userInfo || {}
        if (this.state.isUpdated) {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            // console.log(config);
            axios
                .get(`${process.env.REACT_APP_API_HOST}/users/profile-detail`, config)
                .then(result => {
                    // console.log(result.data.data[0])
                    this.setState({
                        users: result.data.data[0]
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
    handleFile = (event) => {
        this.inputFile.current.click();
        event.preventDefault();
    };
    modalTrigger = () => {
        this.setState({ isShow: !this.state.isShow });
    };
    render() {
        const { isLoggedOut } = this.props
        const { isLoading } = this.props.userData
        if (isLoggedOut === false) {
            return <Navigate to="/" />
        }
        return (
            <>
                {isLoading && <Loading />}
                <div>
                    <Header />
                    <div className="profile-row">
                        <div className="container-fluid" >
                            <h3 className="user-profile">User Profile</h3>
                            <div className="card g-0" style={{ marginLeft: "-50px", maxWidth: "1100px", height: "1000px", borderRadius: "10px", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.22)", marginBottom: "20%" }}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="container-fluid img-container">
                                            <img src={!this.state.image_src ?
                                                this.state.users.pictures ? `${this.state.users.pictures}`
                                                    : Default : this.state.image_src} className="img-profile" alt="img-profile" />
                                        </div>
                                        <h4 className="username" style={{ marginLeft: "-28px" }}>{this.state.users.username ? this.state.users.username : "Display Name"}</h4>
                                        <p className="email" style={{ marginLeft: "-8px" }}>{this.state.users.email ? this.state.users.email : "Email"}</p>
                                        {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>}
                                        <div className="choose-photo">
                                            <input type="file" hidden name="image" ref={this.inputFile} onChange={this.fileChange} />
                                            <button type="button" className="btn btn-warning" style={{ width: "65%" }} onClick={this.handleFile}>Choose Photo</button>
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
                                                    // const { email, phone, username, firstname, lastname, address, date, gender } = this.state;
                                                    // const body = { email, phone, username, firstname, lastname, address, date, gender };
                                                    // event.preventDefault();
                                                    const body = this.setData();
                                                    // console.log(body);
                                                    const { token } = this.props.userInfo
                                                    const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } };
                                                    axios
                                                        .patch(`${process.env.REACT_APP_API_HOST}/users`, body, config)
                                                        .then(res => {
                                                            // console.log(res)
                                                            this.setState({
                                                                isUpdated: true
                                                            });
                                                            let x = document.getElementById("snackbar");
                                                            x.className = "show";
                                                            setTimeout(function () {
                                                                x.className = x.className.replace("show", "");
                                                            }, 3000);
                                                        })
                                                        .catch(error => {
                                                            console.log(error)
                                                            this.setState({
                                                                isUpdated: false,
                                                                errorMsg: error.response.data.error
                                                            });
                                                            var x = document.getElementById("snackbar-fail");
                                                            x.className = "show";
                                                            setTimeout(function () {
                                                                x.className = x.className.replace("show", "");
                                                            }, 5000);
                                                        })
                                                }}>Save Change</button>
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
                                            <div className="form-top">
                                                <h4 className="form-title">Contacts</h4>
                                                <div className="edit-bullet"
                                                    onClick={() => {
                                                        this.state.isEdit ?
                                                            this.setState({
                                                                isEdit: false
                                                            })
                                                            :
                                                            this.setState({
                                                                isEdit: true
                                                            })
                                                    }}
                                                ><img src={EditIcon} alt="edit" className="edit-bullet-img" /></div>
                                            </div>
                                            <form className="row g-3">
                                                <div className="col-md-5">
                                                    <label htmlFor="label-input" className="form-label">Email</label>
                                                    <input type="text" className="input-form" id="inputEmail4"
                                                        placeholder="Enter email address"
                                                        value={this.state.isEdit ? null : this.state.users.email}
                                                        disabled={this.state.isEdit ? false : true}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                email: e.target.value
                                                            })
                                                        }} style={{ marginTop: "-11px" }} />
                                                </div>
                                                <div className="col-md-5">
                                                    <label htmlFor="label-input" className="form-label">Mobile Number</label>
                                                    <input type="text" className="input-form" id="mobile-number"
                                                        placeholder="Enter phone number"
                                                        value={this.state.isEdit ? null : this.state.users.phone}
                                                        disabled={this.state.isEdit ? false : true}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                phone: e.target.value
                                                            })
                                                        }} />
                                                </div>
                                                <div className="col-5">
                                                    <label htmlFor="label-input" className="form-label">Delivery adress :</label>
                                                    <input type="text" className="input-form" id="inputAddress"
                                                        placeholder="Enter delivery addres"
                                                        value={this.state.isEdit ? null : this.state.users.address}
                                                        disabled={this.state.isEdit ? false : true}
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
                                                        placeholder="Enter display name"
                                                        value={this.state.isEdit ? null : this.state.users.username}
                                                        disabled={this.state.isEdit ? false : true}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                username: e.target.value
                                                            })
                                                        }} />
                                                </div>
                                                <div className="col-md-5">
                                                    <label htmlFor="label-input" className="form-label">Birthday</label>
                                                    <input type="date" className="input-form" id="date"
                                                        placeholder="Enter birthday"
                                                        value={this.state.isEdit ? null : this.state.users.date}
                                                        disabled={this.state.isEdit ? false : true}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                date: e.target.value
                                                            })
                                                        }} style={{ marginTop: "-11px" }} />
                                                </div>
                                                <div className="col-5">
                                                    <label htmlFor="label-input" className="form-label">First name :</label>
                                                    <input type="text" className="input-form" id="first-name"
                                                        placeholder="Enter first name"
                                                        value={this.state.isEdit ? null : this.state.users.firstname}
                                                        disabled={this.state.isEdit ? false : true}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                firstname: e.target.value
                                                            })
                                                        }} />
                                                </div>
                                                <div className="col-5">
                                                    <label htmlFor="label-input" className="form-label">Last name :</label>
                                                    <input type="text" className="input-form" id="inputAddress"
                                                        placeholder="Enter last name"
                                                        value={this.state.isEdit ? null : this.state.users.lastname}
                                                        disabled={this.state.isEdit ? false : true}
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
                                <Link className="btn btn-danger" style={{ marginRight: "10px", textDecoration: "none", color: "white" }} to="/login"
                                    onClick={() => {
                                        this.props.dispatch(logoutAction())
                                    }}
                                >
                                    Yes
                                </Link>
                                <button className="btn btn-warning" onClick={this.modalTrigger}>
                                    No
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                    <div id="snackbar">Berhasil update data</div>
                    <div id="snackbar-fail">{this.state.errorMsg ? this.state.errorMsg : "Upload image fail !"}</div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps)(Profile)