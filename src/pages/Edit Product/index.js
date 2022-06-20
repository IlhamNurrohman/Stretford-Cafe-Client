import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Default from "../../assets/img/dummy-image.jpg";

import withParams from "../../Helper/withParams";
import { getProductDetail } from "../../utiliti/product";

import "./EditProduct.css"

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //product: {},
            id: "",
            name: "",
            sizes_id: "",
            description: "",
            delivery_methods_id: "",
            start_hours: "",
            end_hours: "",
            stock: "",
            pictures: Default,
            categories_id: "",
            price: "",
            updated_at: new Date(Date.now()),
            isUpdate: false,
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
        }
        this.inputFile = React.createRef();
    }
    editProductPage = (id) => {
        getProductDetail(id)
            .then((res) => {
                console.log(res);
                this.setState({
                    id: res.data.data[0].id,
                    name: res.data.data[0].name,
                    price: res.data.data[0].price,
                    pictures: res.data.data[0].pictures,
                    description: res.data.data[0].description,
                    delivery_methods_id: res.data.data[0].delivery_methods_id,
                    start_hours: res.data.data[0].start_hours,
                    end_hours: res.data.data[0].end_hours,
                    stock: res.data.data[0].stock,
                    categories_id: res.data.data[0].categories_id,
                    sizes_id: res.data.data[0].sizes_id
                });
            })
            .catch((err) => {
                console.log("ERROR GET PRODUCTS", err);
            });
    };
    setDataProduct = () => {
        let body = new FormData();
        if (this.state.name !== "") {
            body.append("name", this.state.name);
        }
        if (this.state.sizes_id !== "") {
            body.append("sizes_id", this.state.sizes_id);
        }
        if (this.state.description !== "") {
            body.append("description", this.state.description);
        }
        if (this.state.delivery_methods_id !== "") {
            body.append("delivery_methods_id", this.state.delivery_methods_id);
        }
        if (this.state.start_hours !== "") {
            body.append("start_hours", this.state.start_hours);
        }
        if (this.state.end_hours !== "") {
            body.append("end_hours", this.state.end_hours);
        }
        if (this.state.stock !== "") {
            body.append("stock", this.state.stock);
        }
        if (this.state.pictures !== "") {
            body.append("pictures", this.state.pictures);
        }
        if (this.state.categories_id !== "") {
            body.append("categories_id", this.state.categories_id);
        }
        if (this.state.price !== "") {
            body.append("price", this.state.price);
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
        document.title = "Edit Product";
        const { params: { id } } = this.props;
        this.editProductPage(id);
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
                                <span>Add new product</span>
                            </div>
                            <div className="container-fluid img-container">
                                <img src={!this.state.image_src
                                    ? `${this.state.pictures}`
                                    : this.state.image_src} className="img-profile" alt="img-profile" />
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
                                <label forHTML="delivery" className="delivery-hours">Delivery Hour :</label>
                            </div>
                            <div>
                                <input type="time" placeholder='Select start hour' class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }}
                                value={this.state.start_hours}
                                    onChange={(e) => {
                                        this.setState({
                                            start_hours: e.target.value,
                                        });
                                    }} />
                            </div>
                            <div>
                                <input type="time" class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "20px", marginLeft: "10px" }}
                                value={this.state.end_hours}
                                    onChange={(e) => {
                                        this.setState({
                                            end_hours: e.target.value,
                                        });
                                    }} />
                            </div>
                            <div>
                                <label forHTML="input-stock" className="input-stock">Input stock :</label>
                            </div>
                            <div>
                                <input type="stock" placeholder="Input stock" class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }}
                                value={this.state.stock}
                                    onChange={(e) => {
                                        this.setState({
                                            stock: e.target.value,
                                        });
                                    }} />
                            </div>
                            {/* <div>
                                <label forHTML="input-category" className="input-category">Input category :</label>
                            </div>
                            <div>
                                <select class="form-select" aria-label="Default select example" style={{ width: "65%", height: "50px", borderRadius: "20px", marginTop: "10px", marginLeft: "10px" }} value={this.state.categories_id} onChange={this.handleChangeCategories}>
                                    <option value="1">Coffee</option>
                                    <option value="4">Non Coffee</option>
                                    <option value="6">Food</option>
                                </select>
                            </div> */}
                        </div>
                        <div className='col-md-8'>
                            <form className="form-input">
                                <div className="col-md-10">
                                    <label htmlFor="label-input" className="form-label">Name</label>
                                    <input type="text" className="input-form" id="inputEmail4"
                                        placeholder="Enter name product"
                                        value={this.state.name}
                                        onChange={(e) => {
                                            this.setState({
                                                name: e.target.value,
                                            });
                                        }} />
                                    <label htmlFor="label-input" className="form-label">Price</label>
                                    <input type="text" className="input-form" id="inputEmail4"
                                        placeholder="Enter price product"
                                        value={this.state.price}
                                        onChange={(e) => {
                                            this.setState({
                                                price: e.target.value,
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
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: "1" })
                                                    }}
                                                >Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: "4" })
                                                    }}
                                                >Non Coffee</span>
                                            </label>
                                            <label className="new-category-button-inactive">
                                                <input type="radio" name="new-category-input" className='new-category-input' />
                                                <span className="new-category-checkmark"
                                                    onClick={() => {
                                                        this.setState({ categories_id: "6" })
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
                                    <input type="text" className="input-textarea" id="inputEmail4" placeholder="Click methods you want to use for this product" style={{ borderBottom: "none" }} disabled />
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
                                            const userInfo = JSON.parse(localStorage.getItem("userinfo"));
                                            const config = { headers: { Authorization: `Bearer ${userInfo.token}`, "content-type": "multipart/form-data" } }

                                            const body = this.setDataProduct();
                                            axios
                                                .patch(`${process.env.REACT_APP_API_HOST}/products/${this.state.id}`, body, config)
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
                                        }}>Save Product</div>
                                    <Link to="/product" className="custom-apply-button" style={{ background: "rgba(186, 186, 186, 0.35)", color: "rgba(79, 86, 101, 1)", marginTop: "-5%", textDecoration: "none" }}>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
                {/* TOAST */}
                <div id="snackbar-success">Product berhasil ditambahkan!</div>
                <div id="snackbar-fail">Terdapat kesalahan.</div>
            </div>
        )
    }

}
export default withParams(EditProduct)