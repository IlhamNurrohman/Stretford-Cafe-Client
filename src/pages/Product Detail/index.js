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
import { AddCart } from '../../redux/actionCreator/cart';
import { formater } from "../../Helper/formatNumber";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            productId: "",
            size: "",
            delivery: "",
            cart: [],
        }
    }

    productDetailPage = (id) => {
        getProductDetail(id)
            .then((res) => {
                this.setState({
                    product: res.data.data[0] 
                });
            })
            .catch((err) => {
                console.log("ERROR GET PRODUCTS", err);
            });
    };

    checkOutHandle(e) {
        e.preventDefault();
        // this.setState({
        //     allSize: this.state.allSize.push(this.state.size),
        // })
        this.state.allSize.push(this.state.size)
        console.log(this.state.allSize)
    }

    componentDidMount() {
        document.title = "Product Detail";
        const { params: { id }, } = this.props;
        this.productDetailPage(id);
    }
    render() {
        const { params, counter, CounterDown, CounterUp, doAddToCart, cart } = this.props;
        //console.log(cart);
        const { product } = this.state;
        
        return (
            <div>
                <Header />
                <main>
                    {params.id ? (
                        <section className="pd-main-container">
                            <div className="pd-title-menu">
                                <Link to={"/product"}>
                                    {`${product.categories === "non coffee" ? "Non Coffee" : product.categories}`}
                                </Link><span>{`>${product.name}`}</span></div>
                            <section className="pd-main-content">
                                <div className="pd-left-content">
                                    <div className="pd-main-img-container">
                                        <img src={`http://localhost:8000${product.pictures}`} alt="coldbrew" className="pd-main-img" />
                                    </div>
                                    <div className="pd-main-product-name">
                                        <h2>{product.name}</h2>
                                        <p>{`${formater.format(product.price)}`}</p>
                                    </div>
                                    <div className="pd-addcart-button"
                                        onClick={() => {
                                            doAddToCart(this.state.size, this.state.delivery, params.id)
                                            // console.log(this.state.size)
                                        }}
                                    >Add to Cart</div>
                                    <div className="pd-askstaff-button">Ask a Staff</div>
                                </div>
                                <div className="pd-right-content">
                                    <div className="pd-desc-card">
                                        <div className="pd-desc-delivery">
                                            <p>Delivery only on <span>Monday to friday</span>  at <span>{product.start_hours} am - {product.end_hours} pm</span> </p>
                                        </div>
                                        <div className="pd-desc-info">
                                            <p>
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="pd-choose-size">
                                            <h4 className="pd-size-title">Choose a size</h4>
                                            <div className="pd-size-container">
                                                <label className="pd-size-vector">R
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: "Reguler" })
                                                        }}
                                                    /><span className='pd-size-checkmark'></span>
                                                </label>
                                                <label className="pd-size-vector">L
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: "Large" })
                                                        }
                                                        }
                                                    /><span className='pd-size-checkmark'></span>
                                                </label>
                                                <label className="pd-size-vector">XL
                                                    <input type="radio" className='pd-size-input' name='pd-size-input'
                                                        onChange={() => {
                                                            this.setState({ size: "Extra Large" })
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
                                            <label className="pd-dm-button-inactive">
                                                <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                                <span className="pd-dm-checkmark"
                                                    onClick={() => {
                                                        this.setState({ delivery: "Dine In" })
                                                    }}
                                                >Dine in</span>
                                            </label>
                                            <label className="pd-dm-button-inactive">
                                                <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                                <span className="pd-dm-checkmark"
                                                    onClick={() => {
                                                        this.setState({ delivery: "Door Delivery" })
                                                    }}
                                                >Door Delivery</span>
                                            </label>
                                            <label className="pd-dm-button-inactive">
                                                <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                                <span className="pd-dm-checkmark"
                                                    onClick={() => {
                                                        this.setState({ delivery: "Pick Up" })
                                                    }}
                                                >Pick up</span>
                                            </label>
                                        </div>
                                        <form className="pd-settime">
                                            <label htmlFor="settime">Set time:</label>
                                            <input type="time" className="settime" id="settime" placeholder="Enter the time you'll arrived" />
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className="pd-checkout-container">
                                <div className="pd-product-checkout">
                                    <div className="pd-checkout-img">
                                        <img src={`http://localhost:8000${product.pictures}`} alt="coldbrew" className='pd-check-out-img' />
                                    </div>
                                    <div className="pd-checkout-info">
                                        <h4 className="pd-checkout-name">{product.name}</h4>
                                        <div className="pd-checkout-details">
                                            {/* {this.state.allSize.map((size) => ( */}
                                            <p>x{counter.counter} ({cart.size}) <br/>{cart.delivery}</p>
                                            {/* {size === 2 ? "Regular" : size === 3 ? "Large" : "Extra Large"} */}
                                            {/* ))} */}
                                            <p></p>
                                            {/* <p>x1 (Large)</p>
                                            <p>x1 (Regular)</p> */}
                                        </div>
                                    </div>
                                    <div className="pd-checkout-quantity">
                                        <div className="pd-minus-button" onClick={() => CounterDown()}>-</div>
                                        <div className="pd-quantity">{counter.counter}</div>
                                        <div className="pd-plus-button" onClick={() => CounterUp()}>+</div>
                                    </div>
                                </div>
                                <div className="pd-checkout-button">
                                    <Link to="/payment" style={{textDecoration: "none"}}>CHECKOUT</Link>
                                    </div>
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
    const { counter, cart } = reduxState
    return {
        counter, cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        CounterUp: () => {
            dispatch(counterUp())
        },
        CounterDown: () => {
            dispatch(counterDown())
        },
        doAddToCart: (size, delivery, id) => {
            dispatch(AddCart(size, delivery, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(ProductDetail))