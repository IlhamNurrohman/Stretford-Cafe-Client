import React from "react";
import "../CardPayment/CardPayment.css";

export default function CardCart(props) {
    return (
        <div className="pm-all-order">
            <div className="pm-order-item">
                <div className="pm-item-img">
                    <img src={props.pictures} alt="" className="pm-product-img" /></div>
                <div className="pm-item-detail">
                    <p>{props.name}</p>
                    <p>{props.qty}</p>
                    <p>{props.size}</p>
                </div>
                <div className="pm-item-price">{props.price}</div>
            </div>
        </div>
    );
}