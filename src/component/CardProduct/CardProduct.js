import React from "react";

import { useNavigate } from "react-router-dom";
import "../CardProduct/CardProduct.css";
import { formater } from "../../Helper/formatNumber";

export default function Cardproduct(props) {
  const navigate = useNavigate();
  const { id } = props;
  const handleClick = () => {
    navigate(`/product/detail/${id}`);
  };
  return (
    <>
      <button
        className="btn"
        onClick={handleClick}>
        <div className="card"
          style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px", color: "rgba(57, 57, 57, 0.1)", marginBottom: "40%" }}>
          <img key={props.pictures} src={props.pictures} className="" alt={props.name} style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}>
          </img>
          <div className="card-body">
            <h5 key={props.name} className="card-title custom-product-name" style={{ marginBottom: "35%" }}>{props.name}</h5>
            <p key={props.price} className="card-text custom-product-price"
              style={{ textAlign: "center", fontFamily: "Poppins", color: "rgba(106, 64, 41, 1)", }}>{`${formater.format(props.price)}`}</p>
          </div>
        </div>
      </button>
    </>
  );
}