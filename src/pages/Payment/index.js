import React, { Component } from 'react'
import axios from "axios";
import { connect } from "react-redux";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { formater } from '../../Helper/formatNumber'

import "./Payment.css"
// import { getProductDetail } from "../../utiliti/product";

// import img
//import Hazelnut from "../../assets/img/hazelnut.png"
import Card from "../../assets/icon/Vector (3).png"
import Bank from "../../assets/icon/Vector (2).png"
import Cod from "../../assets/icon/fast-delivery 3.png"
//import CardPayment from "../../component/CardPayment/CardPayment";

const mapStateToProps = (state) => {
    const { cart, counter: { counter }, auth: { userInfo }, userData: { data: { address, id, phone } } } = state;
    return {
        cart, counter, id, address, phone, userInfo
    };
};
export class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            users: [],
            transactions: [],
            payment: "",
            isPost: false,
            // isLoggedIn: localStorage.getItem('userinfo') ? true : false,
        };
    }
    // productDetailPage = (id) => {
    //     getProductDetail(id)
    //         .then((res) => {
    //             this.setState({
    //                 product: res.data.data[0]
    //             });
    //         })
    //         .catch((err) => {
    //             console.log("ERROR GET PRODUCTS", err);
    //         });
    // };
    // getInfoUser = () => {
    //     // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    //     // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    //     //console.log(config);
    //     const token = this.props.userInfo;
    //     const config = { headers: { Authorization: `Bearer ${token}` } }
    //     axios
    //         .get(`${process.env.REACT_APP_API_HOST}/users/profile-detail`, config)
    //         .then(result => {
    //             //console.log(result.data.data[0])
    //             this.setState({
    //                 users: result.data.data[0]
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // };

    handlePostTransaction = () => {
        const { counter, cart: { delivery, productId }, id } = this.props
        const products_id = productId
        const sub_total = (this.state.product.price * counter) + (this.state.product.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0)
        const qty = counter
        const users_id = Number(id)
        const payment_methods_id = this.state.payment
        const delivery_methods_id = delivery
        const date = new Date(Date.now())
        const created_at = new Date(Date.now())

        const { token } = this.props.userInfo;
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const body = { date, sub_total, payment_methods_id, products_id, qty, users_id, delivery_methods_id, created_at }
        console.log(token)
        axios
            .post(`${process.env.REACT_APP_API_HOST}/transactions`, body, config)
            .then(result => {
                console.log(result)
                this.setState({
                    transactions: result.data.data,
                    isPost: true
                });
                let x = document.getElementById("better");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 10000);
            })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        document.title = "Payment"
        const { cart: { productId } } = this.props
        axios
            .get(`${process.env.REACT_APP_API_HOST}/products/detail/${productId}`)
            .then(result => {
                // console.log(this.state.product)
                this.setState({
                    product: result.data.data[0],
                })
            })
            .catch(error => {
                console.log(error)
            })
        // const { token } = this.state;
        // this.getInfoUser(token);
    }
    render() {
        const { counter, cart: { size, delivery }, phone, address } = this.props
        return (
            <>
                <Header />
                <main className="pm-main-container">
                    <div className="pm-title">Checkout your item now!</div>
                    <section className="pm-main-content">
                        <section className="pm-left-content">
                            <div className="pm-order-summary">Order Summary</div>
                            <div className="pm-all-order">
                                <div className="pm-all-order">
                                    <div className="pm-order-item">
                                        <div className="pm-item-img">
                                            <img src={`${this.state.product.pictures}`} alt="" className="pm-product-img" /></div>
                                        <div className="pm-item-detail">
                                            <p>{this.state.product.name}</p>
                                            <p>x{counter}</p>
                                            <p>{size}</p>
                                        </div>
                                        <div className="pm-item-price">{formater.format(this.state.product.price)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pm-border"></div>
                            <div className="pm-all-order-info">
                                <div className="pm-subtotal">
                                    <div className="pm-info">SUBTOTAL</div>
                                    <div className="pm-price">{formater.format(this.state.product.price * counter)}</div>
                                </div>
                                <div className="pm-tax">
                                    <div className="pm-info">TAX {'&'} FEES</div>
                                    <div className="pm-price">{formater.format(this.state.product.price * counter * 10 / 100)}</div>
                                </div>
                                <div className="pm-shipping">
                                    <div className="pm-info">SHIPPING</div>
                                    <div className="pm-price">{formater.format(delivery === "Door Delivery" ? 10000 : 0)}</div>
                                </div>
                            </div>
                            <div className="pm-total-order-price">
                                <div className="pm-total-info-title">TOTAL</div>
                                <div className="pm-total-info-price">{formater.format((this.state.product.price * counter) + (this.state.product.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0))}</div>
                            </div>
                        </section>
                        <section className="pm-right-content">
                            <div className="pm-right-content-card">
                                <div className="pm-address-detail-section">
                                    <div className="pm-address-detail-container">
                                        <div className="pm-address-detail-title">Address details</div>
                                        <div className="pm-address-detail-edit">edit</div>
                                    </div>
                                    <div className="address-detail-card">
                                        <div className="pm-address-detail">
                                            {/* <input
                                                type="text"
                                                className="address-payment p-2"
                                                value={`Delivery to ${this.state.users.address}`}
                                                disabled
                                            /> */}
                                            <span>Delivery to</span> {delivery === "Door Delivery" ? "Delivery to" : delivery}
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            <input
                                                type="text"
                                                className="address-payment p-2"
                                                value={address}
                                                onChange={(event) => {
                                                    this.setState({
                                                        address: event.target.value,
                                                    })
                                                }}
                                                disabled
                                            />
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            <input
                                                type="text"
                                                className="address-payment p-2"
                                                value={phone}
                                                onChange={(event) => {
                                                    this.setState({
                                                        phone: event.target.value,
                                                    })
                                                }}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pm-payment-method">
                                    <div className="pm-payment-method-title">
                                        Payment method
                                    </div>
                                    <div className="pm-payment-method-card">
                                        <form>
                                            <label className="pm-radio-method-container">
                                                <div className='pm-card-vector-container'>
                                                    <img src={Card} alt="card" className='pm-card-vector' />
                                                </div>
                                                <p>Card</p>
                                                <input type="radio" name="pm-method-input"
                                                    value="1"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            payment: event.target.value,
                                                        });
                                                    }} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container">
                                                <div className='pm-bank-vector-container'>
                                                    <img src={Bank} alt="" className='pm-bank-vector' />
                                                </div>
                                                <p>Bank account</p>
                                                <input type="radio" name="pm-method-input"
                                                    value="3"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            payment: event.target.value,
                                                        });
                                                    }} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container">
                                                <div className='pm-cod-vector-container'>
                                                    <img src={Cod} alt="" className='pm-cod-vector' />
                                                </div>
                                                <p>Cash on Delivery</p>
                                                <input type="radio" name="pm-method-input"
                                                    value="8"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            paymentMethods: event.target.value,
                                                        });
                                                    }} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="pm-confirm-button" onClick={this.handlePostTransaction}>Confirm and Pay</div>
                        </section>
                    </section>
                </main>
                <Footer />
                <div id="better">
                    Transactions Success
                </div>
            </>
        )
    }
}


export default connect(mapStateToProps)(Payment);