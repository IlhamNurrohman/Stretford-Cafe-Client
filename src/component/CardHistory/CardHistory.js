import React from "react";
import './CardHistory.css';

export default function Cardproduct(props) {
    return (
        <>
            <div className="col h-product-card-container">
                <div className="h-product-card">
                    <div className="h-product-img-container">
                        <img src={props.pictures} alt="image-product" className='h-product-img' />
                    </div>
                    <div className="h-product-info">
                        <div className="h-product-name">{props.name}</div>
                        <div className="h-product-price-status-container">
                            <div className="h-product-price-status">
                                <div className="h-product-price">{props.sub_total}</div>
                                <div className="h-product-status">{props.delivery}</div>
                            </div>
                            <div className="h-product-checklist">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}