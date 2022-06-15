import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import CardHistory from "../../component/CardHistory/CardHistory";

import './History.css';
import axios from "axios";
export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('userinfo') ? true : false,
            history: [],
        };
    }
    componentDidMount() {
        document.title="History"

        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
        //console.log(config);
        axios
            .get(`${process.env.REACT_APP_API_HOST}/transactions`, config)
            .then(result => {
                //console.log(result.data.data)
                this.setState({
                    history: result.data.data
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
                            <CardHistory 
                            key={item.id} 
                            pictures={`${process.env.REACT_APP_API_HOST}${item.pictures}`}
                            name={item.name} 
                            sub_total={item.sub_total}
                            delivery_methods_id={item.delivery_methods_id}  />
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}