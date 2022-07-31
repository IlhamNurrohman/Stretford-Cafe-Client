import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from "axios";
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Default from "../../assets/img/Screen Shot 2022-06-20 at 11.20.36.png";

import "./AddPromo.css"

// import { getUserDataAction } from '../../redux/actionCreator/userData'
// import withLocation from '../../Helper/withLocation'

const mapStateToProps = (reduxState) => {
    const { auth: { isLoggedIn, userInfo } } = reduxState
    return { isLoggedIn, userInfo }
}
class AddPromo extends Component {
    constructor() {
        super();
        this.state = {
            name_product: "",
            normal_price: "",
            description: "",
            sizes_id: "",
            delivery_methods_id: "",
            discount: "",
            start_date: "",
            end_date: "",
            coupon_code: "",
            pictures: Default,
            categories_id: "",
            created_at: new Date(Date.now()),
            isPost: false,
            // isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            isError: false,
            errorMsg: "",
        }
        this.inputFile = React.createRef();
    }
    setDataPromo = () => {
        let body = new FormData();
        if (this.state.name_product !== "") {
            body.append("name_product", this.state.name_product);
        }
        if (this.state.normal_price !== "") {
            body.append("normal_price", this.state.normal_price);
        }
        if (this.state.description !== "") {
            body.append("description", this.state.description);
        }
        if (this.state.sizes_id !== "") {
            body.append("sizes_id", this.state.sizes_id);
        }
        if (this.state.delivery_methods_id !== "") {
            body.append("delivery_methods_id", this.state.delivery_methods_id);
        }
        if (this.state.discount !== "") {
            body.append("discount", this.state.discount);
        }
        if (this.state.start_date !== "") {
            body.append("start_date", this.state.start_date);
        }
        if (this.state.end_date !== "") {
            body.append("end_date", this.state.end_date);
        }
        if (this.state.coupon_code !== "") {
            body.append("coupon_code", this.state.coupon_code);
        }
        if (this.state.pictures !== "") {
            body.append("pictures", this.state.pictures);
        }
        if (this.state.categories_id !== "") {
            body.append("categories_id", this.state.categories_id);
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
                this.setState({ image_src: reader.result, use_src: false, pictures: file }, () => {
                    //console.log(this.state.image_src);
                });
            };
            reader.readAsDataURL(file);
        }
    };
    handleFile = (event) => {
        this.inputFile.current.click();
        event.preventDefault();
    };
    componentDidMount() {
        document.title = "Add Promo"
    }
    render() {
        return (
            <div className="main">
                <Header />
                <div className="container-fluid" style={{ height: "1400px" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pd-title-menu">
                                <span>Add new promo</span>
                            </div>
                            <div className="container-fluid img-container">
                                <img src={!this.state.image_src
                                    ? `${this.state.pictures}`
                                    : this.state.image_src} className="img-profile" alt="img-profile" style={{ marginLeft: "-17.5%" }} />
                            </div>
                            {/* {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>} */}
                            <div className="choose-photo">
                                <input type="file" hidden name="image" ref="" />
                                <button type="button" className="btn btn-dark" style={{ width: "65%", height: "50px", borderRadius: "20px" }} >Take a picture</button>
                            </div>
                            <div className="remove-photo">
                                <input type="file" hidden name="image" ref={this.inputFile} onChange={this.fileChange} />
                                <button type="button" className="btn btn-warning"
                                    style={{ width: "65%", color: "rgba(106, 64, 41, 1)", height: "50px", marginTop: "-15px", borderRadius: "20px" }} onClick={this.handleFile}>Choose from gallery</button>
                            </div>
                            <div>
                                <label forHTML="input-stock" className="input-stock">Input discount</label>
                            </div>
                            <div>
                                <input class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder="Input discount"
                                    onChange={(e) => {
                                        this.setState({
                                            discount: e.target.value,
                                        });
                                    }} >
                                </input>
                            </div>
                            <div>
                                <label forHTML="delivery" className="delivery-hours">Expire Date :</label>
                            </div>
                            <div>
                                <input class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder="Input start date"
                                    onChange={(e) => {
                                        this.setState({
                                            start_date: e.target.value,
                                        });
                                    }} />
                            </div>
                            <div>
                                <input class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "20px", marginLeft: "10px" }} placeholder="Input end date"
                                    onChange={(e) => {
                                        this.setState({
                                            end_date: e.target.value,
                                        });
                                    }} />
                            </div>
                            <div>
                                <label forHTML="input-stock" className="input-stock">Input coupon code :</label>
                            </div>
                            <div>
                                <input class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder="Input coupon code"
                                    onChange={(e) => {
                                        this.setState({
                                            coupon_code: e.target.value,
                                        });
                                    }} />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <form className="form-input">
                                <div className="col-md-10">
                                    <label htmlFor="label-input" className="form-label">Name</label>
                                    <input type="text" className="input-form" id="inputEmail4"
                                        placeholder="Type promo name min. 50 characters"
                                        onChange={(e) => {
                                            this.setState({
                                                name_product: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Normal Price</label>
                                    <input type="text" className="input-form" id="inputEmail4"
                                        placeholder="Type the normal price"
                                        onChange={(e) => {
                                            this.setState({
                                                normal_price: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Description</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Describe your promo min. 150 characters"
                                        onChange={(e) => {
                                            this.setState({
                                                description: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Category item :</label>
                                    <div className="new-category-container">
                                        <div className="new-category-button">
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: 1 })
                                                    }}
                                                >Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: 4 })
                                                    }}
                                                >Non Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: 6 })
                                                    }}
                                                >Food</span>
                                            </label>
                                        </div>
                                    </div>
                                    <label htmlFor="label-input" className="form-label">Input product size :</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Click size you want to use for this product" style={{ borderBottom: "none" }} disabled />
                                    <div className="pd-size-container">
                                        <label className="pd-size-vector">R
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 2 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">L
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 3 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">XL
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 5 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">250 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 9 })
                                                }}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">300 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 10 })
                                                }}
                                            // style={{lineHeight: "20px"}}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">500 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onChange={() => {
                                                    this.setState({ sizes_id: 11 })
                                                }}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                    </div>
                                    <label htmlFor="label-input" className="form-label">Input delivery methods :</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Click methods you want to use for this promo" style={{ borderBottom: "none" }} disabled />
                                    <div className="pd-delivery-button">
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                            <span className="pd-dm-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery_methods_id: 1 })
                                                }}
                                            >Dine in</span>
                                        </label>
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                            <span className="pd-dm-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery_methods_id: 2 })
                                                }}
                                            >Door Delivery</span>
                                        </label>
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                            <span className="pd-dm-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery_methods_id: 6 })
                                                }}
                                            >Pick up</span>
                                        </label>
                                    </div>
                                    <div className="custom-apply-button"
                                    onClick={() => {
                                        const { token } = this.props.userInfo;
                                        const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }

                                        const body = this.setDataPromo();
                                        axios
                                            .post(`${process.env.REACT_APP_API_HOST}/promos`, body, config)
                                            .then(result => {
                                                console.log(result)
                                                this.setState({
                                                    isPost: true
                                                });
                                                let x = document.getElementById("snackbar-success");
                                                x.className = "show";
                                                setTimeout(function () {
                                                    x.className = x.className.replace("show", "");
                                                }, 10000);
                                            })
                                            .catch(error => {
                                                console.log(error)
                                                var x = document.getElementById("snackbar-fail");
                                                x.className = "show";
                                                setTimeout(function () {
                                                    x.className = x.className.replace("show", "");
                                                }, 5000);
                                                this.setState({
                                                    isError: true,
                                                    errorMsg: error.response.data.err,
                                                })
                                            })
                                    }}>Save Promo</div>
                                    <Link to="/product" className="custom-apply-button" style={{ background: "rgba(186, 186, 186, 0.35)", color: "rgba(79, 86, 101, 1)", marginTop: "-5%", textDecoration: "none" }}>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
                {/* TOAST */}
                <div id="snackbar-success">Add Promo success !</div>
                <div id="snackbar-fail">{this.state.errorMsg ? this.state.errorMsg : "Upload image fail !"}</div>
            </div>
        )
    }

}
export default connect(mapStateToProps)(AddPromo)