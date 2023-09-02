import React, { useContext } from "react";
import "../css/CartItem.css";
import { crtx } from "../components/UseContext";

const CartItem = ({ ıtem }) => {
  const { removeItem } = useContext(crtx);

  return (
    <li className="li">
      <div className="cart-header">
        <img src={ıtem.img} alt="/" />
      </div>
      <div className="cart-item">
        <div className="cart-item-text">
          <span className="text">{ıtem.name}</span>
          <div className="price-x">
            <span>${ıtem.price}</span>
            <span>x1</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            removeItem(ıtem.id);
          }}
          className="ml-3  btn"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default CartItem;
