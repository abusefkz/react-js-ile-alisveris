import React, { useContext } from "react";
import "../css/BasketShow.css";
import CartItem from "./CartItem";
import { crtx } from "../components/UseContext";

const BasketShow = ({ notShowClick, setItem }) => {
  const { ıtems, totalAmount } = useContext(crtx);
  const maybeShow = ıtems.length > 0;

  return (
    <div className="product">
      <div className="product-header">
        <span>Sepetim</span>
        <a onClick={notShowClick} href="/">
          X
        </a>
      </div>
      {ıtems.map((i) => (
        <CartItem ıtem={i} />
      ))}
      {maybeShow && (
        <div>
          <span>Toplam = $ {totalAmount}</span>
          <div className="buttons">
            <button className="btn btn-success">Sipariş Ver</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketShow;
