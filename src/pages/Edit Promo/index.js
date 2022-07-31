import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Default from "../../assets/img/Screen Shot 2022-06-20 at 11.20.36.png";
import { connect } from 'react-redux'

import withParams from "../../Helper/withParams";
import { getPromobyId } from "../../utiliti/promos";
// import moment from 'moment'

import "./EditPromo.css"

const mapStateToProps = (reduxState) => {
    const { auth: { isLoggedIn, userInfo } } = reduxState
    return { isLoggedIn, userInfo }
}

class EditPromo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name_product: "",
            normal_price: "",
            description: "",
            name_size: "",
            delivery: "",
            discount: "",
            start_date: "",
            end_date: "",
            coupon_code: "",
            pictures: Default,
            category: "",
            updated_at: new Date(Date.now()),
            isUpdate: false,
            // isLoggedIn: localStorage.getItem('userinfo') ? true : false,
        }
        this.inputFile = React.createRef();
    }
    editPromoPage = (id) => {
        getPromobyId(id)
            .then((res) => {
                console.log(res.data.data[0]);
                this.setState({
                    id: res.data.data[0].id,
                    name_product: res.data.data[0].name_product,
                    normal_price: res.data.data[0].normal_price,
                    description: res.data.data[0].description,
                    name_size: res.data.data[0].name_size === "R" ? 2 : res.data.data[0].name_size === "L" ? 3 : res.data.data[0].name_size === "XL" ? 5 : res.data.data[0].name_size === "250 gr" ? 9 : res.data.data[0].name_size === "300 gr" ? 10 : 11,
                    delivery: res.data.data[0].delivery === "Dine in" ? 1 : res.data.data[0].delivery === "Door delivery" ? 2 : 6,
                    discount: res.data.data[0].discount,
                    start_date: res.data.data[0].start_date,
                    end_date: res.data.data[0].end_date,
                    coupon_code: res.data.data[0].coupon_code,
                    category: res.data.data[0].category === "Coffee" ? 1 : res.data.data[0].category === "Non Coffee" ? 4 : 6,
                    pictures: res.data.data[0].pictures,
                });
            })
            .catch((err) => {
                console.log("ERROR GET PRODUCTS", err);
            });
    };
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
        if (this.state.name_size !== "") {
            body.append("sizes_id", this.state.name_size);
        }
        if (this.state.delivery !== "") {
            body.append("delivery_methods_id", this.state.delivery);
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
        if (this.state.category !== "") {
            body.append("categories_id", this.state.category);
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
        document.title = "Edit Promo";
        const { params: { id } } = this.props;
        this.editPromoPage(id);
    }
    render() {
        //  const { name, price, pictures, description } = this.state;
        //  console.log(this.state);
        return (
            <div className="main">
                <Header />
                <div className="container-fluid" style={{ height: "1400px" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pd-title-menu">
                                <span>Edit Promo</span>
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
                                    value={this.state.discount}
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
                                    value={this.state.start_date}
                                    onChange={(e) => {
                                        this.setState({
                                            start_date: e.target.value,
                                        });
                                    }} />
                            </div>
                            <div>
                                <input class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "20px", marginLeft: "10px" }} placeholder="Input end date"
                                    value={this.state.end_date}
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
                                    value={this.state.coupon_code}
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
                                        placeholder="Enter name product"
                                        value={this.state.name_product}
                                        onChange={(e) => {
                                            this.setState({
                                                name_product: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Price</label>
                                    <input type="text" className="input-form" id="inputEmail4"
                                        placeholder="Enter price product"
                                        value={this.state.normal_price}
                                        onChange={(e) => {
                                            this.setState({
                                                normal_price: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Description</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Enter description product"
                                        value={this.state.description}
                                        onChange={(e) => {
                                            this.setState({
                                                description: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Category item :</label>
                                    <div className="new-category-container">
                                        <div className="new-category-button">
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input'
                                                    checked={this.state.category === 1 ? true : false}
                                                    onClick={() => {
                                                        this.setState({ category: 1 })
                                                    }} />
                                                <span className="new-category-checkmark">Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input'
                                                    checked={this.state.category === 4 ? true : false}
                                                    onClick={() => {
                                                        this.setState({ category: 4 })
                                                    }} />
                                                <span className="new-category-checkmark">Non Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input'
                                                    checked={this.state.category === 6 ? true : false}
                                                    onClick={() => {
                                                        this.setState({ category: 6 })
                                                    }} />
                                                <span className="new-category-checkmark">Food</span>
                                            </label>
                                        </div>
                                    </div>
                                    <label htmlFor="label-input" className="form-label">Input product size :</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Click size you want to use for this product" style={{ borderBottom: "none" }} disabled />
                                    <div className="pd-size-container">
                                        <label className="pd-size-vector">R
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 2 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 2 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">L
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 3 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 3 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">XL
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 5 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 5 })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">250 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 9 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 9 })
                                                }}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">300 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 10 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 10 })
                                                }}
                                            // style={{lineHeight: "20px"}}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                        <label className="pd-size-vector-gram">500 gr
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                checked={this.state.name_size === 11 ? true : false}
                                                onChange={() => {
                                                    this.setState({ name_size: 11 })
                                                }}
                                            /><span className='pd-size-checkmark-gram'></span>
                                        </label>
                                    </div>
                                    <label htmlFor="label-input" className="form-label">Input delivery methods :</label>
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Click methods you want to use for this product" style={{ borderBottom: "none" }} disabled />
                                    <div className="pd-delivery-button">
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input'
                                                checked={this.state.delivery === 1 ? true : false}
                                                onClick={() => {
                                                    this.setState({ delivery: 1 })
                                                }} />
                                            <span className="pd-dm-checkmark">Dine in</span>
                                        </label>
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input'
                                                checked={this.state.delivery === 2 ? true : false}
                                                onClick={() => {
                                                    this.setState({ delivery: 2 })
                                                }} />
                                            <span className="pd-dm-checkmark">Door Delivery</span>
                                        </label>
                                        <label className="pd-dm-button-inactive">
                                            <input type="radio" name="pd-dm-input" className='pd-dm-input'
                                                checked={this.state.delivery === 6 ? true : false}
                                                onClick={() => {
                                                    this.setState({ delivery: 6 })
                                                }} />
                                            <span className="pd-dm-checkmark">Pick up</span>
                                        </label>
                                    </div>

                                    <div className="custom-apply-button"
                                        onClick={() => {
                                            const { token } = this.props.userInfo
                                            const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }

                                            const body = this.setDataPromo();
                                            axios
                                                .patch(`${process.env.REACT_APP_API_HOST}/promos/${this.props.params.id}`, body, config)
                                                .then(result => {
                                                    console.log(result)
                                                    this.setState({
                                                        isUpdate: true
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
                <div id="snackbar-success">Update success !</div>
                <div id="snackbar-fail">Update fail !</div>
            </div>
        )
    }

}
export default connect(mapStateToProps)(withParams(EditPromo))