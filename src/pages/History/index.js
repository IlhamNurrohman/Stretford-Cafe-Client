import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import './History.css';
import axios from "axios";

// import img
import Coldbrew from "../../assets/img/image 2.png"


export default class History extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            history: [],
        };
        this.inputFile = React.createRef();
    }
    componentDidMount() {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
        //console.log(config);
        axios
            .get("http://localhost:8000/transactions", config)
            .then(result => {
                console.log(result.data.data[0])
                this.setState({
                    history: result.data.data[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        if (this.state.isLoggedIn === false) {
            return <Navigate to="/login" />
        }
        return (
            <div>
                <Header />
                <main className='h-main-container'>
                    <section className='h-title'>
                        <h1>Let's see what you have bought!</h1>
                        <p>Select item to delete</p>
                        <div className="h-select-all" style={{ textDecoration: "None" }}>Select All</div>
                    </section>
                    <section className='h-main-product-container row row-cols-sm-2 row-cols-md-3 row-cols-xs-1'>
                        {this.state.history.map((item) => (
                            <div className="col h-product-card-container">
                                <div className="h-product-card">
                                    <div className="h-product-img-container">
                                        <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                    </div>
                                    <div className="h-product-info">
                                        <div className="h-product-name">{item.name}</div>
                                        <div className="h-product-price-status-container">
                                            <div className="h-product-price-status">
                                                <div className="h-product-price">{item.sub_total}</div>
                                                <div className="h-product-status">{item.delivery}</div>
                                            </div>
                                            <div className="h-product-checklist">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}