import React, { Component } from "react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import ColdBrew from "../../assets/img/long black.png"

import "./ProductDetail.css";

export default class ProductDetail extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="pd-main-container">
                    <div className="pd-title-menu">Favorite {'&'} Promo <span>{'>'} Cold Brew</span></div>
                    <section className="pd-main-content">
                        <div className="pd-left-content">
                            <div className="pd-main-img-container">
                                <img src={ColdBrew} alt="coldbrew" className="pd-main-img" />
                            </div>
                            <div className="pd-main-product-name">
                                <h2>COLDBREW</h2>
                                <p>IDR. 30.000</p>
                            </div>
                            <div className="pd-addcart-button">Add to Cart</div>
                            <div className="pd-askstaff-button">Ask a Staff</div>
                        </div>
                        <div className="pd-right-content">
                            <div className="pd-desc-card">
                                <div className="pd-desc-delivery">
                                    <p>Delivery only on <span>Monday to friday</span>  at <span>1 - 7 pm</span> </p>
                                </div>
                                <div className="pd-desc-info">
                                    <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                                </div>
                                <div className="pd-choose-size">
                                    <h4 className="pd-size-title">Choose a size</h4>
                                    <div className="pd-size-container">
                                        <div className="pd-size-vector">R</div>
                                        <div className="pd-size-vector">L</div>
                                        <div className="pd-size-vector">XL</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-delivery-container">
                                <h4 className="pd-delivery-title">Choose Delivery Methods</h4>
                                <div className="pd-delivery-button">
                                    {/* <label className="radio-container">Dine in
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Door Delivery
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Pick up
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label> */}
                                    <div className="pd-delivery-dinein-button">Dine in</div>
                                    <div className="pd-delivery-door-button">Door Delivery</div>
                                    <div className="pd-delivery-pickup-button">Pick up</div>
                                </div>
                                <form className="pd-settime">
                                    <label htmlFor="settime">Set time:</label>
                                    <input type="text" name="settime" id="settime" placeholder="Enter the time you'll arrived" />
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="pd-checkout-container">
                        <div className="pd-product-checkout">
                            <div className="pd-checkout-img">
                                <img src={ColdBrew} alt="coldbrew" className='pd-check-out-img' />
                            </div>
                            <div className="pd-checkout-info">
                                <h4 className="pd-checkout-name">COLD BREW</h4>
                                <div className="pd-checkout-details">
                                    <p>x1 (Large)</p>
                                    <p>x1 (Regular)</p>
                                </div>
                            </div>
                            <div className="pd-checkout-quantity">
                                <div className="pd-minus-button">-</div>
                                <div className="pd-quantity">2</div>
                                <div className="pd-plus-button">+</div>
                            </div>
                        </div>
                        <div className="pd-checkout-button">CHECKOUT</div>
                    </section>

                </section>
                <Footer />
            </div>
        );
    }
}