import React, { Component } from 'react'
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import "./Payment.css"

// import img
import Hazelnut from "../../assets/img/hazelnut.png"
import Card from "../../assets/icon/Vector (3).png"
import Bank from "../../assets/icon/Vector (2).png"
import Cod from "../../assets/icon/fast-delivery 3.png"

export default class Payment extends Component {
    componentDidMount() {
        document.title = "Payment"
    }
    render() {
        return (
            <div>
                <Header />
                <main className="pm-main-container">
                    <div className="pm-title">Checkout your item now!</div>
                    <section className="pm-main-content">
                        <section className="pm-left-content">
                            <div className="pm-order-summary">Order Summary</div>
                            <div className="pm-all-order">
                                <div className="pm-order-item">
                                    <div className="pm-item-img">
                                        <img src={Hazelnut} alt="" className="pm-product-img" /></div>
                                    <div className="pm-item-detail">
                                        <p>Hazelnut Latte</p>
                                        <p>x 1</p>
                                        <p>Regular</p>
                                    </div>
                                    <div className="pm-item-price">IDR 24.0</div>
                                </div>
                                {/* <div className="pm-order-item">
                                    <div className="pm-item-img"><img src={Hazelnut} alt="" className="pm-product-img" /></div>
                                    <div className="pm-item-detail">
                                        <p>Hazelnut Latte</p>
                                        <p>x 1</p>
                                        <p>Regular</p>
                                    </div>
                                    <div className="pm-item-price">IDR 24.0</div>
                                </div> */}

                            </div>
                            <div className="pm-border"></div>
                            <div className="pm-all-order-info">
                                <div className="pm-subtotal">
                                    <div className="pm-info">SUBTOTAL</div>
                                    <div className="pm-price">IDR 120.000</div>
                                </div>
                                <div className="pm-tax">
                                    <div className="pm-info">TAX {'&'} FEES</div>
                                    <div className="pm-price">IDR 20.000</div>
                                </div>
                                <div className="pm-shipping">
                                    <div className="pm-info">SHIPPING</div>
                                    <div className="pm-price">IDR 10.000</div>
                                </div>
                            </div>
                            <div className="pm-total-order-price">
                                <div className="pm-total-info-title">TOTAL</div>
                                <div className="pm-total-info-price">IDR 150.000</div>
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
                                            <span>Delivery to</span> Iskandar Street
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            Km 5 refinery road oppsite re
                                            public road, effurun, Jakarta
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            +62 81348287878
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
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container">
                                                <div className='pm-bank-vector-container'>
                                                    <img src={Bank} alt="" className='pm-bank-vector' />
                                                </div>
                                                <p>Bank account</p>
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container">
                                                <div className='pm-cod-vector-container'>
                                                    <img src={Cod} alt="" className='pm-cod-vector' />
                                                </div>
                                                <p>Cash on Delivery</p>
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="pm-confirm-button">Confirm and Pay</div>
                        </section>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}