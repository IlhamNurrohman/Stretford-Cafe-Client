import React from "react";
import './CardHistory.css';
import { formater } from "../../Helper/formatNumber";

export default function Cardproduct(props) {
    return (
        <>
            <div className="col h-product-card-container">
                <div className="h-product-card">
                    <div className="h-product-img-container">
                        <img src={props.pictures} alt="product" className='h-product-img' />
                    </div>
                    <div className="h-product-info">
                        <div className="h-product-name">{props.name}</div>
                        <div className="h-product-price-status-container">
                            <div className="h-product-price-status">
                                <div className="h-product-price">{`${formater.format(props.sub_total)}`}</div>
                                <div className="h-product-price">{props.delivery_methods_id}</div>
                            </div>
                            <input type="checkbox" className="form-check-input" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}