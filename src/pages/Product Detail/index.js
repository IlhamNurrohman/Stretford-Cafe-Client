import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import "./ProductDetail.css";
//import axios from "axios";
import withParams from "../../Helper/withParams";
import { getProductDetail } from "../../utiliti/product";
import { counterUp, counterDown } from '../../redux/actionCreator/counter';
import { setCart } from '../../redux/actionCreator/cart';
import { formater } from "../../Helper/formatNumber";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                getProduct: [],
                size: "",
            },
        }
    }

    getProductDetailPage = (id) => {
        getProductDetail(id)
            .then((res) => {
                this.setState({
                    product: { ...this.state.product, getProduct: res.data.data[0] },
                });
            })
            .catch((err) => {
                console.log("ERROR GET PRODUCTS", err);
            });
    };

    setAddCart(){
        const body = [
            ...this.props.cart,
            {
            //   name: this.state.dataProduct.name,
            //   image: this.state.dataProduct.image,
            //   quantity: this.state.counter,
            //   now: this.state.now,
            //   totalPrice: this.state.dataProduct.price * this.state.counter,
                size: this.state.size,
            //   devlieryOption: this.state.deliveryOption,
            //   product_id: this.state.dataProduct.id
            }
          ];
          this.props.setCart();
    }   

    componentDidMount() {
        const { params: { id }, } = this.props;
        this.getProductDetailPage(id);
    }
    render() {
        const { params, counter, dispatch } = this.props;
        //console.log(counter);
        const { product } = this.state;
        const { getProduct } = product;
        return (
            <div>
                <Header />
                <main>
                    {params.id ? (
                        <section className="pd-main-container">
                            <div className="pd-title-menu">
                                <Link to={"/product"}>
                                    {`${getProduct.category === "non coffee" ? "Non Coffee" : getProduct.category}`}
                                </Link><span>{`>${getProduct.name}`}</span></div>
                            <section className="pd-main-content">
                                <div className="pd-left-content">
                                    <div className="pd-main-img-container">
                                        <img src={`http://localhost:8000${getProduct.pictures}`} alt="coldbrew" className="pd-main-img" />
                                    </div>
                                    <div className="pd-main-product-name">
                                        <h2>{getProduct.name}</h2>
                                        <p>{`${formater.format(getProduct.price)}`}</p>
                                    </div>
                                    <div className="pd-addcart-button"
                                        onClick={this.setAddCart}
                                    >Add to Cart</div>
                                    <div className="pd-askstaff-button">Ask a Staff</div>
                                </div>
                                <div className="pd-right-content">
                                    <div className="pd-desc-card">
                                        <div className="pd-desc-delivery">
                                            <p>Delivery only on <span>Monday to friday</span>  at <span>{getProduct.start_hours} am - {getProduct.end_hours} pm</span> </p>
                                        </div>
                                        <div className="pd-desc-info">
                                            <p>
                                                {getProduct.description}
                                            </p>
                                        </div>
                                        <div className="pd-choose-size">
                                            <h4 className="pd-size-title">Choose a size</h4>
                                            <div className="pd-size-container">
                                                <label className="pd-size-vector">R
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: 2 })
                                                        }
                                                        }
                                                    /><span className='pd-size-checkmark'></span>
                                                </label>
                                                <label className="pd-size-vector">L
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: 3 })
                                                        }
                                                        }
                                                    /><span className='pd-size-checkmark'></span>
                                                </label>
                                                <label className="pd-size-vector">XL
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: 5 })
                                                        }
                                                        }
                                                    /><span className='pd-size-checkmark'></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pd-delivery-container">
                                        <h4 className="pd-delivery-title">Choose Delivery Methods</h4>
                                        <div className="pd-delivery-button">
                                            <div className="pd-delivery-dinein-button">Dine in</div>
                                            <div className="pd-delivery-door-button">Door Delivery</div>
                                            <div className="pd-delivery-pickup-button">Pick up</div>
                                        </div>
                                        <form className="pd-settime">
                                            <label htmlFor="settime">Set time:</label>
                                            <input type="text" className="settime" id="settime" placeholder="Enter the time you'll arrived" />
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className="pd-checkout-container">
                                <div className="pd-product-checkout">
                                    <div className="pd-checkout-img">
                                        <img src={`http://localhost:8000${getProduct.pictures}`} alt="coldbrew" className='pd-check-out-img' />
                                    </div>
                                    <div className="pd-checkout-info">
                                        <h4 className="pd-checkout-name">{getProduct.name}</h4>
                                        <div className="pd-checkout-details">
                                            {/* {this.state.allSize.map((size) => ( */}
                                                <p>x {counter.counter}</p>
                                                    {/* {size === 2 ? "Regular" : size === 3 ? "Large" : "Extra Large"} */}
                                            {/* ))} */}
                                            <p></p>
                                            {/* <p>x1 (Large)</p>
                                            <p>x1 (Regular)</p> */}
                                        </div>
                                    </div>
                                    <div className="pd-checkout-quantity">
                                        <div className="pd-minus-button" onClick={() => dispatch(counterDown())}>-</div>
                                        <div className="pd-quantity">{counter.counter}</div>
                                        <div className="pd-plus-button" onClick={() => dispatch(counterUp())}>+</div>
                                    </div>
                                </div>
                                <div className="pd-checkout-button">CHECKOUT</div>
                            </section>
                        </section>
                    ) : null}
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    //const { counter, cart } = reduxState
    return {
        counter: reduxState.counter,
        cart: reduxState.cart
    }
}

export default connect(mapStateToProps)(withParams(ProductDetail))