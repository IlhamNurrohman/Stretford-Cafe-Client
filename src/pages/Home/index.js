import React, { Component } from "react";
import { connect } from 'react-redux'

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import userIcon from "../../assets/icon/icon-user.png";
import storeIcon from "../../assets/icon/icon-location.png";
import loveIcon from "../../assets/icon/icon-love.png";
import teamWork from "../../assets/img/35744 1.png";
import checkIcon from "../../assets/icon/check.png";
import hazulnutImg from "../../assets/img/hazelnut.png";
import pinkyImg from "../../assets/img/pinky.png";
import chickenImg from "../../assets/img/chicken.png";
import storeImg from "../../assets/icon/store.png";
import sponsorImg from "../../assets/img/sponsor.png";
import viezhImg from "../../assets/img/viezh.png";
import yessicaImg from "../../assets/img/yessica.png";
import kimImg from "../../assets/img/kim.png";
import starIcon from "../../assets/icon/star.png";

import "./Home.css";

import { getUserDataAction } from '../../redux/actionCreator/userData'
import withLocation from '../../Helper/withLocation'

const mapStateToProps = (reduxState) => {
    const { auth: { isLoggedIn, userInfo } } = reduxState
    return { isLoggedIn, userInfo }
}
class Home extends Component {
    constructor(){
        super();
        this.state = {
            pageActive: "Home",
            isShow: false
        }
    }
    componentDidMount(){
        document.title = "Home"
        window.scrollTo(0, 0);
        const { isLoggedIn, dispatch } = this.props
        if (isLoggedIn) {
            const { token = null } = this.props.userInfo || {}
            dispatch(getUserDataAction(token))
        }
        const { state = null } = this.props.location;
        if (state !== null && !state.isAuthenticated) {
            this.setState({
                isShow: true,
            });
        }
    }
    render() {
        return (
            <div>
                <Header />
                <section className="home-image">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="p-4 p-md-8 mb-6 text-white rounded">
                                    <div className="col-md-6 px-0">
                                        <h2 className="home-title">Start Your Day with Coffee and Good Meals</h2>
                                        <p className="home-desc">We provide high quality beans, good taste, and healthy meals made by love just for
                                            you.
                                            Start your day with us for a bigger smile!</p>
                                        <button type="button" className="btn btn-warning btn-lg">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-group body-card">
                            <div className="card mb-6 " style={{ maxWidth: "1140px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="img-fluid rounded-start icon-img" alt="userIcon" src={userIcon}></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text"><b>90+</b></p>
                                            <p className="card-text">Staff</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-6" style={{ maxWidth: "1140px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="img-fluid rounded-start icon-img" alt="userIcon" src={storeIcon}></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text"><b>30+</b></p>
                                            <p className="card-text">Stores</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-6" style={{ maxWidth: "1140px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="img-fluid rounded-start icon-img" alt="userIcon" src={loveIcon}></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text"><b>800+</b></p>
                                            <p className="card-text">Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="content-desc">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={teamWork} alt="teamwork" className="img-team" />
                            </div>
                            <div className="col-md-6 desc-item">
                                <h2 className="desc-title">
                                    We Provide Good Coffee <br />
                                    and Healthy Meals
                                </h2>
                                <p className="desc-word">
                                    You can explore the menu that we provide with fun and <br />
                                    have their own taste and make your day better.
                                </p>
                                <ul className="desc-list-item">
                                    <li><img src={checkIcon} alt="list-icon" /> &nbsp;High quality beans</li>
                                    <li className="list-item-desc"><img src={checkIcon} alt="list-icon" /> &nbsp;Healthy meals, you can
                                        request the ingredients</li>
                                    <li className="list-item-desc"><img src={checkIcon} alt="list-icon" /> &nbsp;Chat with our staff to
                                        get better experience for ordering</li>
                                    <li className="list-item-desc"><img src={checkIcon} alt="list-icon" /> &nbsp;Free member card with a
                                        minimum purchase of IDR 200.000.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="favorite">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-title">Here is People's Favorite</h2>
                                <p className="section-desc">Let's choose and have a bit taste of people's favorite. It might be yours too!</p>
                            </div>
                        </div>
                        <div className="row card-rows">
                            <div className="col-md-4">
                                <div className="card card-layout-hazelnut" style={{ height: "550px" }}>
                                    <img src={hazulnutImg} className="card-img-top" alt="hazelnut-img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hazelnut Latte</h5>
                                    </div>
                                    <ul className="hazelnut-list">
                                        <li className="list-group-item"><img src={checkIcon} alt="hazelnut-list" /> HazelnutSyrup</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="hazelnut-list" /> Wanilla Whipped
                                            Cream</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="hazelnut-list" /> Ice / Hot</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="hazelnut-list" /> Sliced Banana on Top
                                        </li>
                                    </ul>
                                    <div className="card-body card-price-one">
                                        <h4 className="card-title">IDR 25.000</h4>
                                        <button type="button" className="btn btn-outline-warning">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-layout-pinky" style={{ height: "550px" }}>
                                    <img src={pinkyImg} className="card-img-top" alt="pinky-img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Pinky Promise</h5>
                                    </div>
                                    <ul className="pinky-list">
                                        <li className="list-group-item"><img src={checkIcon} alt="pinky-list" style={{ border: "None" }} /> 1 Shot of Coffee</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="pinky-list" /> Vanilla Whipped Cream
                                        </li>
                                        <li className="list-group-item"><img src={checkIcon} alt="pinky-list" /> Chocolate Biscuits</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="pinky-list" /> Strawberry Syrup</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="pinky-list" /> Sliced strawberry on
                                            Top</li>
                                    </ul>
                                    <div className="card-body card-price-one">
                                        <h4 className="card-title">IDR 25.000</h4>
                                        <button type="button" className="btn btn-outline-warning">Select</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-layout-active" style={{ height: "550px" }}>
                                    <img src={chickenImg} className="card-img-top" alt="chicken-img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Chicken Wings</h5>
                                    </div>
                                    <ul className="chicken-list">
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Wings</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Drum Sticks</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Mayonaise and Lemon
                                        </li>
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Hot Fried</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Secret Recipe</li>
                                        <li className="list-group-item"><img src={checkIcon} alt="chicken-list" /> Buy 1 Get 1 only for
                                            Dine in</li>
                                    </ul>
                                    <div className="card-body card-price-one">
                                        <h4 className="card-title">IDR 25.000</h4>
                                        <button type="button" className="btn btn-outline-warning active">Select</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="store">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-title">
                                    Visit Our Store in the <br />
                                    Spot on the Map Below
                                </h2>
                                <p className="section-desc">
                                    See our store in every city on the spot and spen your good day there. <br />
                                    See you soon !
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <img src={storeImg} alt="userIcon" className="img-fluid img-store" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="partner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-title">Our Partner</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <img src={sponsorImg} alt="sponsor" className="sponsor-image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimony">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 class="section-title">
                                    Loved by Thousands of <br />
                                    Happy Customer
                                </h2>
                                <p class="section-desc mt-3">These are the stories of our customers who have visited us with great pleasure.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-4">
                                <div className="card card-testimony-active-layout">
                                    <div className="card-body user-detail">
                                        <div className="user-image">
                                            <img src={viezhImg} alt="testi-user-image1" /> &nbsp; &nbsp; &nbsp;
                                            <div className="user-credential">
                                                <span className="user-name">Viezh Robert</span>
                                                <span className="user-address">Warsaw, Poland</span>
                                            </div>
                                        </div>
                                        <div className="user-rating">
                                            <span className="num-rating">4.5</span>
                                            <img src={starIcon} alt="rating-icon" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="user-testimony">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the
                                            coffee and meals tho. I like it here!! Very recommended!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card card-testimony-layout" style={{ paddingBottom: "6%" }}>
                                    <div className="card-body user-detail">
                                        <div className="user-image">
                                            <img src={yessicaImg} alt="testi-user-image2" /> &nbsp; &nbsp; &nbsp;
                                            <div className="user-credential">
                                                <span className="user-name">Yessica Christy</span>
                                                <span className="user-address">Shanxi, China</span>
                                            </div>
                                        </div>
                                        <div className="user-rating">
                                            <span className="num-rating">4.5</span>
                                            <img src={starIcon} alt="rating-icon" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="user-testimony">“I like it because I like to travel far and still can make my day better just by
                                            drinking their Hazelnut Latte</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card card-testimony-layout">
                                    <div className="card-body user-detail">
                                        <div className="user-image">
                                            <img src={kimImg} alt="testi-user-image3" /> &nbsp; &nbsp; &nbsp;
                                            <div className="user-credential">
                                                <span className="user-name">Kim Young Jou</span>
                                                <span className="user-address">Seoul, South Korea</span>
                                            </div>
                                        </div>
                                        <div className="user-rating">
                                            <span className="num-rating">4.5</span>
                                            <img src={starIcon} alt="rating-icon" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="user-testimony">“This is very unusual for my taste, I haven't liked coffee before but their
                                            coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6 col-arrow">

                            </div>
                        </div>
                    </div>
                </section>

                <section class="promo">
                    <div class="container-fluid">
                        <div class="row card-promo-row">
                            <div class="card card-promo-layout">
                                <div class="card-body">
                                    <div class="row card-promo-row-inside">
                                        <div class="col-md-6">
                                            <h2 class="section-title promo-title">Check our promo today!</h2>
                                            <p class="section-desc promo-desc">Let's see the deals and pick yours!</p>
                                        </div>
                                        <div class="col-md-6">
                                            <button type="button" class="btn btn-warning btn-lg promo-button">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>  
        );
    }
}

export default connect(mapStateToProps)(withLocation(Home))